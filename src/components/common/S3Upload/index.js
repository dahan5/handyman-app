
import React, { useState } from 'react';

import * as mime from 'react-native-mime-types';
import * as fs from 'expo-file-system';
import * as DocumentPicker from "expo-document-picker";
import { TouchableOpacity } from 'react-native';
import AWS from 'aws-sdk';

import { SECRET_KEY_AWS, ACCESS_KEY_AWS } from '@env';
import { config } from "../../../config";
import TextInput from '../TextInput';

const S3Upload = props => {

  const {
    multiple = false, onUpload, accept = "*/*", error, helperText,
    label = "Upload", value, disabled = false, fileName,
    directory = "resume",
  } = props;

  const [uploading, setUploading] = useState(false);

  const s3Bucket = new AWS.S3({
    accessKeyId: ACCESS_KEY_AWS,
    secretAccessKey: SECRET_KEY_AWS,
    region: config.AMAZON_REGION,
    Bucket: config.AMAZON_S3_BUCKET,
    signatureVersion: "v4",
  })

  const uploadFile = async file => {
    return new Promise(async (resolve, reject) => {
      const arrayBuffer = await fs.readAsStringAsync(file.uri, {
        encoding: fs.EncodingType.UTF8
      });
      const contentType = mime.lookup(file.uri);
      const fileName = file.name || String(new Date.now());
      const contentDisposition = `inline;filename="${fileName}"`;
      s3Bucket.createBucket(() => {
        const params = {
          Bucket: config.AMAZON_S3_BUCKET,
          Key: `${directory}/${fileName}`,
          Body: arrayBuffer,
          ContentDisposition: contentDisposition,
          ContentType: contentType,
          Acl: "public-read",
          Expires: 60 * 60 * 24 * 7
        }
        s3Bucket.upload(params, (err, data) => {
          if (err) reject(err);
          else resolve(data);
        })
      })
    })
  }

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: accept
    });
    setUploading(true);
    uploadFile(result)
      .then(data => {
        setUploading(false);
        onUpload(data);
      })
      .catch(err => {
        setUploading(false);
        console.error(err);
      })
  };

  return (
    <TouchableOpacity onPress={pickDocument}>
      <TextInput
        label={label}
        name="file"
        value={uploading ? `uploading...` : value}
        editable={false}
        disabled={disabled}
      />
    </TouchableOpacity>
  )
}

export default S3Upload;

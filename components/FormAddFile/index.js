import React, { useState } from 'react'
import styled from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Dropzone, { Wrap as WrapDropzone } from '../../atomic-ui/components/Dropzone'
import Button from '../../atomic-ui/components/Button'

export const Wrap = styled(Column)`
  padding: 15px;

  ${WrapDropzone} {
    height: auto;
  }
`

export const AddFile = ({ limit, accept, placeholder, submitText, className, onSubmit }) => {
  const [files, setFiles] = useState()

  return (
    <Wrap className={className}>
      <Dropzone
        name={'file'}
        accept={accept || 'image/*'}
        placeholder={placeholder || `Перетащите сюда файлы (Не больше ${limit})`}
        onChange={(files) => setFiles(files)}
        maxFiles={limit}
        multiple
      />

      <Button onClick={() => files?.length > 0 && onSubmit(files)} disabled={files?.length === 0}>
        {submitText || 'Добавить файлы'}
      </Button>
    </Wrap>
  )
}

AddFile.defaultProps = {
  limit: 10
}

export default AddFile

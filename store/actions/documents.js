import C from '../types/documents'

export function setDocuments(documents) {
  return {
    type: C.SET_DOCUMENTS,
    payload: {
      documents
    }
  }
}

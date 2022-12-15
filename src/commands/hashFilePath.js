const { createHash } = await import('node:crypto');

export const hashFilePath = async ([filePath]) => {
  const hashToHex = createHash('sha256').update(filePath).digest('hex');

  console.log(hashToHex);
};

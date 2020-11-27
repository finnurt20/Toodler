import * as FileSystem from 'expo-file-system';
const listDirectory = `${FileSystem.documentDirectory}lists`;

const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    if (errorHandler) {
      return errorHandler(err);
    }
    console.error(err);
  }
}

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(listDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(listDirectory);
  }
}

export const getBoardLists = async () => {
  await setupDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(listDirectory));
  return Promise.all(result.map(async boardid => {
    return {
      name: "name",
      boardId: boardid
    };
  }));

}

import * as FileSystem from 'expo-file-system';

const boardDirectory = `${FileSystem.documentDirectory}boards`;

export const copyFile = async (file, newLocation) => {
  return FileSystem.copyAsync({
    from: file,
    to: newLocation
  })
};

export const addBoard = async (boardLocation) => {
  const folderSplit = boardLocation.split('/');
  const fileName = folderSplit[folderSplit.length -1];
  await copyFile(boardLocation, `${boardLocation}/${fileName}`);

  return {
    name: fileName
  }
};

export const remove = async (id) => {
  return FileSystem.deleteAsync(`${boardDirectory}/${id}`, {
    idempotent: true
  });
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(boardDirectory);
  if(!dir.exists) {
    await FileSystem.makeDirectoryAsync(boardDirectory)
  }
}

export const getAllBoards = async () => {
//check if directory exists
    await setupDirectory();

  const result = await FileSystem.readDirectoryAsync(boardDirectory)
  console.log(result);
  return Promise.all(result.map(async fileName => {
    return {
      name: filename,
    };
  }));
};

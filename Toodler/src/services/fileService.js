import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}boards/thumbnailPhoto`
const boardDirectory = `${FileSystem.documentDirectory}boards`;
const listDirectory = `${FileSystem.documentDirectory}lists`;
const taskDirectory = `${FileSystem.documentDirectory}tasks`;

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

export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}

export const loadImage = async (fileName) => {
  return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
    encoding: FileSystem.EncodingType.Base64
  }));
}

export const addImage = async (photoLocation) => {
  console.log(imageDirectory)
  const folderSplit = photoLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];
  await copyFile(photoLocation, `${imageDirectory}/${fileName}`);
  return {
    name: fileName,
    file: await loadImage(fileName)
  }
};



export const removeBoard = async (id) => {
  console.log(`${boardDirectory}`)
  return FileSystem.deleteAsync(`${boardDirectory}/${id}`, {
    idempotent: true
  });
};

export const removeList = async (id) => {
  return FileSystem.deleteAsync(`${listDirectory}/${id}`, {
    idempotent: true
  });
};

export const removeTask = async (id) => {
  return FileSystem.deleteAsync(`${taskDirectory}/${id}`, {
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

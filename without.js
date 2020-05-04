const without = function(source, itemsToRemove) {
  let sourceToEdit = [...source];
  for (const item of itemsToRemove) {
    const indexOfItemInSource = sourceToEdit.indexOf(item)
    if (indexOfItemInSource > -1) {
      sourceToEdit.splice(indexOfItemInSource, 1)
    }
  }
  return sourceToEdit;
};

module.exports = without;
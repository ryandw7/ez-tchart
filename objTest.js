const myObj = {
    parent1: {
        child1: { item1: 'foo', item2: 'bar' },
        child2: { item1: 'foo', item2: 'bar' }
    },
    parent2: {
        child1: { item1: 'foo', item2: 'bar' },
        child2: { item1: 'foo', item2: 'bar' }
    },
    parent3: {
        child1: { item1: 'foo', item2: 'bar' },
        child2: { item1: 'foo', item2: 'bar' }
    }
}

const updateObject = (parent, child, value) => {
const newObj = {
    ...myObj,
    [parent] : {
        ...myObj[parent],
        [child]: value
    }
}

return newObj;
}
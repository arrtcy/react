const products = (store = { list: [],page:1 }, action) => {

  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...store, list: [...store.list, ...action.payload] }

    default: return store

  }

}


export default products
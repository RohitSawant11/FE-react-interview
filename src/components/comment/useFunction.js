const useFunction = () => {
    const addFunction = (tree, commentId, newComment) => {
        tree.map((d) => {
            if(d.id === commentId) {
                d.items.unshift(    {
                    id: 222,
                    name: "Onee",
                    items:[]
                }
            )
                console.log(d)
                return d;
            }
        })
       
    }

    const tempFunction = (tree,commentId,newComment) => {
        tree.map((d) => {
            if(d.id === commentId) {
                tree.items.unshift({
                    id:66,
                    name:newComment,
                    items:[]
                })
                return tree
            }
        })
    }
    return { addFunction };
}

export default useFunction;
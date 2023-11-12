import ListItem from "./ListItem";

const List = (parm) => {
    const task = parm.data.map((item) => {
        return <ListItem key={item.id} task={item} testovoe={'testGadji'}/>
    })

    const emptyList = (<li className="todo-item justify-content-center">
        <span className="todo-item-text">Список дел пуст</span>
    </li>);


    return <ul className="todo-list">
        {parm.data.length > 0 ? task : emptyList}
    </ul>
};

export default List;
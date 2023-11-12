import React from "react";

import Header from "./Header";
import Search from "./Search";
import List from "./List";
import Footer from "./Footer";

class ListItem extends React.Component {

    state = {
        todolist: [
            {id: 0, title: 'Выпить кофе'},
            {id: 1, title: 'Сделать React приложение'},
            {id: 2, title: 'Позавтракать'}
        ]
    };

    render() {
        return (
            <>
            <Header/>
            <Search/>
            <List data={this.state.todolist}/>
            <Footer/>
            </>
        )
    }
}


export default ListItem;
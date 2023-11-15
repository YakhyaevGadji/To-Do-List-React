import React from "react";

import Header from "./Header";
import Search from "./Search";
import List from "./List";
import Footer from "./Footer";

class ListItem extends React.Component {

    state = {
        todolist: [
            {id: 0, title: 'Выпить кофе', important: false, done: false},
            {id: 1, title: 'Сделать React приложение', important: false, done: false},
            {id: 2, title: 'Позавтракать', important: false, done: false}
        ]
    };

    onToggleImportant = (id) => {
       
        this.setState((state) => {
            const index = state.todolist.findIndex((el) => el.id === id); 
            const oldTask = state.todolist[index];
            
            const newTask = {...oldTask, important: !oldTask.important};
            
            const part1 = state.todolist.slice(0, index);
            const part2 = state.todolist.slice(index + 1);

            const newArray = [...part1, newTask, ...part2];
            
            console.log(newArray);
            return {
               todolist: newArray
            }
        });
       
    };

    render() {
        return (
            <>
            <Header/>
            <Search/>
            <List data={this.state.todolist} onToggleImportant={this.onToggleImportant}/>
            <Footer/>
            </>
        )
    }
}


export default ListItem;
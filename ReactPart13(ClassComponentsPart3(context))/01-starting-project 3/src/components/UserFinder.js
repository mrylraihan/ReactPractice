import React,{ Fragment,Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css'
import UserContext from '../store/users_context';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    //this is like the useContext hook but you can only use one at a time 
    static contextType = UserContext;
    constructor(){
        super()
        this.state = {
            filteredUsers:[],
            searchTerm: ''
        }
    }

    componentDidMount(){
        //send http request and use this to populate the page on first initial render
        //just like useEffect(()=>{}, [])
        //will only run once 
        //we are loading the data when the component is mounted 
        //now you call the context variable with this.context and the use the dot notation to access the key from that context file 
        this.setState({filteredUsers:this.context.users})
    }
    // useEffect(() => {
    //     setFilteredUsers(
    //         DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    //     );
    // }, [searchTerm]); 
    componentDidUpdate(prevProps, prevState){
        if(prevState.searchTerm!== this.state.searchTerm){
            this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) })
        }
    }


    searchChangeHandler(event){
        this.setState({searchTerm:event.target.value});
    }
    render(){
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     setFilteredUsers(
    //         DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    //     );
    // }, [searchTerm]);

    // const searchChangeHandler = (event) => {
    //     setSearchTerm(event.target.value);
    // };

    // return (
    //     <Fragment>
    //     <div className={classes.finder}>
    //     <input type='search' onChange={searchChangeHandler} />
    //     </div>
    //     <Users users={filteredUsers} />
    //     </Fragment>
    // );
// };

export default UserFinder;
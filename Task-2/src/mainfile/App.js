import React, {Component}  from 'react';
import SearchBox from '../comp/Search';
import CardList from '../comp/CardList';
import Navbar from "../comp/Nav";
import Loader from '../comp/loading';

class App extends Component{

    constructor(){
        super()
        this.state={
            robots: [],
            searchfeild: '',
            isButtonClicked: false
        }
    }

    onButtonSubmit = () => {
        this.setState({isButtonClicked: !this.isButtonClicked})
        const timer = setTimeout(() => {
            fetch('https://reqres.in/api/users?page=1').then(response=> {
            return response.json();
            })
            .then(users=>{
                this.setState({robots: users.data})
            });
        }, 3000);
        return () =>clearTimeout(timer);
    }

    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.first_name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })

        if(this.state.robots.length === 0 && this.state.isButtonClicked === false){
            return (
              <>
                <Navbar onButtonSubmit={this.onButtonSubmit}/>
                <h1 className='tc'>Please click on get users to get all details</h1>
              </>
            );

        }
        else if(this.state.robots.length === 0){
            return (
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <h1 className='tc'>Loading...</h1>
                  <Loader className='loader'></Loader>
                </>
              );
        }

        else{
            return(
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <div className='tc'>
                      <h1>Meet Our Client</h1>
                      <SearchBox searchChange={this.onSearchChange}/>
                      <hr  style={{
                        marginTop:'30px',
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor : '#000000'
                    }}/>
                        <CardList robots={filteredRobots}/>
                     
                  </div>
                 </>
              );
        }

    }

}

export default App;

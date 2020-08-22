import React,{Component} from 'react'
import "../styles/todolist.css"

class Todolist extends Component{
    constructor(props){
        super(props);
            this.state={
                 user:{name:"",message:"",date:"",time:""},
                 users:[],
                 showDate:true
            }
    }

    handleInput=(event)=>{
        let check=Object.assign({},this.state.user);
        const view = event.target.id;
        check[view]=event.target.value;

        this.setState({user:check})
    }

    handleSubmit=()=>{
        if(this.state.user.name === "" || this.state.user.message ===""){
            console.log("please fill the form");
        }else{
            this.state.users.push(this.state.user)
             this.setState({showDate:true,user:{name:"",message:"",date:"",day:""}})
        }
    }

    handleDelete=(index)=>{
        let newDate=Object.assign([],this.state.users);
        newDate.splice(index,1);
        this.setState({users:newDate})
    }

    render(){
        const userDate=this.state.users;
        console.log("sjfgd",this.state.users)
        return(
            <div className="mainContainer">

        {/* leftpannel */}
          <div className="leftContainer">
            <div className="todoList">TodoList</div>
            <div className="leftPannel">
                <div className="boxContainer">
                    <label>Name : </label>
                    <input type="text" id="name" className="name" value={this.state.user.name} onChange={this.handleInput}/>
                </div>
                <div className="boxContainer">
                    <label>Message : </label>
                    <textarea type="text" id="message" className="message" value={this.state.user.message} onChange={this.handleInput}/>
                </div>
                <div className="boxContainer">
                    <label>Date : </label>
                    <input type="date" id="date" className="date" value={this.state.user.date} onChange={this.handleInput}/>
                </div>
                <div className="boxContainer">
                    <label>Time : </label>
                    <input type="time" className="time" id="time" value={this.state.user.time} onChange={this.handleInput}/>
                </div> 
            </div>
            <div className="boxContainer">
                <button type="button" className="buttonContainer" onClick={()=>this.handleSubmit()}>Submit</button>
            </div>
          </div>

          {/* rightpannel */}
          <div className="rightContainer">
            <div className="todoList">List of Details</div>
            {this.state.showDate?
            <div className="rightPannel">
                <tabel>
                    <tr>
                    <td className="list">Name</td>
                    <td className="list">Message</td>
                    <td className="list">Date</td>
                    <td className="list">Time</td>
                    <td className="list">Delete</td>
                    </tr>
                    {userDate.map((user,index)=>{
                        return(
                           <tr >
                            <td className="list1">{user.name}</td>
                            <td className="list1">{user.message}</td>
                            <td className="list1">{user.date}</td>
                            <td className="list1">{user.time}</td>
                            <td className="list1" onClick={this.handleDelete.bind(this,user,index)}><button className="delete">Delete</button></td>
                          </tr>
                        )
                    })   
                    }
                </tabel>
            </div>:null
            } 
          </div>            
        </div>
        )
    }
}

export default Todolist;
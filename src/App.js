import React from 'react';
import List from './show/listShow';
import './App.css';

class App extends React.Component{
  state={
    str:'hello my man',
    showlist:false,
    showstr:true
  }
  changeHandler=(event)=>{
    this.setState({
      str:event.target.value,
    })
  }
  listHandler=()=>{
    this.setState({
      showlist:!this.state.showlist
    })
  }
  deleteHandler=(index)=>{
    const  str=[...this.state.str];
    str.splice(index,1);
    this.setState({str:str})
  }
  

  render(){

    let str=[...this.state.str];

    
    let characters=null;
    if(this.state.showlist){
        characters=(
            <div>
              
            {str.map((single,index)=>{
               return( 
                 <List item={single} onClick={()=>this.deleteHandler(index)}/>
                )
            })}
        </div>
        )
    }
  
    

  
    return(
      <div>
        <h1>Hello React</h1>
        <p>
          {str=[...this.state.str]}
        </p>
        <input type='text' onChange={this.changeHandler} value={this.state.str}></input>
        <p>Entered Text={this.state.str}</p>
        <button onClick={this.listHandler}>Show list</button>
        <button>Show string</button><br/>
        {characters}
      </div>
    );
  }
}

export default App;

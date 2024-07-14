function AddTodo(){
  return <div>
    <div className="container text-center">
    <div className="row">
      <div className="col-4">
        <input className="inputs" type="text" placeholder="Enter ToDo here"/>
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success btn-custom">Add</button>
      </div>
    </div>
  </div>
  </div>
  
}

export default AddTodo;
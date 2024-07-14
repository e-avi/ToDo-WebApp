function Item1(){
  let todoname = 'Buy Milk';
  let tododate = '14/07/2024';
  return <div>
    <div class="container idk" >
        <div class="row">
          <div class="col-4">
            {todoname}
          </div>
          <div class="col-4">
            {tododate}
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Danger</button>
          </div>
        </div>
      </div>
  </div>
}

export default Item1;
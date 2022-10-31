// import logo from './logo.svg';
import './App.css';
import {CarList, PostList, PostTable, UserInput} from './components';


const CarListWOProps = ()=>{
  const car = {
    model: 'i20',
    company: 'Hyundai',
    price: 20,
    configuration: {
      color: 'gray',
      fuel: 'petrol',
      cylinder: 4,
      fuelTankCapacity: 37,
      mileage: {
        city: 14,
        highway: 20
      }
    },
    features: ['touch screen', 'bluetooth', 'alloy wheels', 'power steering']
  }

  return(
    <ul>
      <li>Model : {car.model}</li>
      <li>Company : {car.company}</li>
      <li>Price : {car.price}</li>
      <li>Configuration </li>
      <ul>
        <li>Color : {car.configuration.color}</li>
        <li>Fuel : {car.configuration.fuel}</li>
        <li>Cylinder : {car.configuration.cylinder}</li>
        <li>Fuel Tank Capacity : {car.configuration.fuelTankCapacity}</li>
        <li>Mileage </li>
        <ul>
          <li>City : {car.configuration.mileage.city}</li>
          <li>Highway : {car.configuration.mileage.highway}</li>
        </ul> 
      </ul>
      <li>Features </li>
      <ul>
        {car.features.map((val)=>{
          return <li>{val}</li>
        })}
      </ul>
    </ul>
  )
}

function App() {
  const car = {
    model: 'i20',
    company: 'Hyundai',
    price: 20,
    configuration: {
      color: 'gray',
      fuel: 'petrol',
      cylinder: 4,
      fuelTankCapacity: 37,
      mileage: {
        city: 14,
        highway: 20
      }
    },
    features: ['touch screen', 'bluetooth', 'alloy wheels', 'power steering']
  }

  const posts = [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
    },
    {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
    },
    {
      userId: 1,
      id: 6,
      title: 'dolorem eum magni eos aperiam quia',
      body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
    },
    {
      userId: 1,
      id: 7,
      title: 'magnam facilis autem',
      body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
    },
    {
      userId: 1,
      id: 8,
      title: 'dolorem dolore est ipsam',
      body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
    },
    {
      userId: 1,
      id: 9,
      title: 'nesciunt iure omnis dolorem tempora et accusantium',
      body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
    }]

  return (
    <div className="App">
      <h1 style={{textAlign:"Center"}}>Car List Without Props</h1>
      <br />
      <CarListWOProps/>
      <hr />

      <h1 style={{textAlign:"Center"}}>Car List With Props</h1>
      <br />
      <CarList car = {car}/>
      <hr />

      <h1 style={{textAlign:"Center"}}>Post List</h1>
      <br />
      <PostList posts = {posts}/>
      <hr />

      <h1 style={{textAlign:"Center"}}>Post Table</h1>
      <br />
      <PostTable posts = {posts}/>
      <hr />
      
      <h1 style={{textAlign:"Center"}}>User Input Post</h1>
      <br />
      <UserInput posts = {posts}/>
      <hr />
    </div>
  );
}

export default App;
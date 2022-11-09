const initState = {
      booking:[
            {id: 10000, cancel: 0, gender: 'M', fName: 'Manish', lName : 'Patil', address : 'Shirpur', zip : '425406', contact: '8765876689', email : 'manish@user.com', password : 'Manish@123'},
            {id: 10001, cancel: 1, gender: 'M', fName: 'Manoj', lName : 'Marathe', address : 'Vani', zip : '400213', contact: '9876363523', email : 'manoj@user.com', password : 'Manoj@123'},
            {id: 10002, cancel: 0, gender: 'M', fName: 'Rohan', lName : 'Mali', address : 'Kolhapur', zip : '432521', contact: '7636357892', email : 'rohan@user.com', password : 'Rohan@123'},
            {id: 10003, cancel: 1, gender: 'M', fName: 'Mehul', lName : 'Pandit', address : 'Dhule', zip : '445332', contact: '8475368487', email : 'mehul@user.com', password : 'Mehul@123'},
            {id: 10004, cancel: 0, gender: 'M', fName: 'Ajinkya', lName : 'Mehata', address : 'Nagpur', zip : '464457', contact: '9936467256', email : 'ajinkya@user.com', password : 'Ajinkya@123'},
            {id: 10005, cancel: 0, gender: 'M', fName: 'Rahul', lName : 'Kulkarni', address : 'Dhuke', zip : '474636', contact: '7885958463', email : 'rahul@user.com', password : 'Rahul@123'},
            {id: 10004, cancel: 1, gender: 'M', fName: 'Yash', lName : 'Panchal', address : 'Satara', zip : '435362', contact: '6476967468', email : 'yash@user.com', password : 'Yash@123'},
            {id: 10006, cancel: 0, gender: 'M', fName: 'Pankaj', lName : 'Wagh', address : 'Aurangabad', zip : '467873', contact: '8476758569', email : 'pankaj@user.com', password : 'Pankaj@123'},
            {id: 10007, cancel: 0, gender: 'M', fName: 'Chetan', lName : 'Badgujar', address : 'Raygad', zip : '484737', contact: '7262841236', email : 'chetan@user.com', password : 'Chetan@123'},
            {id: 10008, cancel: 1, gender: 'M', fName: 'Gaurav', lName : 'Pardeshi', address : 'Akola', zip : '473837', contact: '9384747322', email : 'gaurav@user.com', password : 'Gaurav@123'},
            {id: 10009, cancel: 0, gender: 'M', fName: 'Sanjay', lName : 'Mali', address : 'Jalgoan', zip : '404837', contact: '8685743923', email : 'sanjay@user.com', password : 'Sanjay@123'},
            {id: 10010, cancel: 0, gender: 'M', fName: 'Ritesh', lName : 'Borse', address : 'Amalner', zip : '400048', contact: '9595843637', email : 'ritesh@user.com', password : 'Ritesh@123'},
            {id: 10011, cancel: 0, gender: 'F', fName: 'Pranjali', lName : 'Chaudhari', address : 'Goa', zip : '499945', contact: '8473636290', email : 'pranjali@user.com', password : 'Pranjali@123'},
            {id: 10012, cancel: 1, gender: 'M', fName: 'Aaditya', lName : 'Warma', address : 'Parbhani', zip : '487375', contact: '8464637474', email : 'aaditya@user.com', password : 'Aaditya@123'},
            {id: 10013, cancel: 0, gender: 'F', fName: 'Sakshi', lName : 'Hisale', address : 'Shindkheda', zip : '441666', contact: '7747464839', email : 'sakshi@user.com', password : 'Sakshi@123'},
            {id: 10014, cancel: 0, gender: 'M', fName: 'Vishal', lName : 'Marathe', address : 'Thane', zip : '409372', contact: '8665445422', email : 'vishal@user.com', password : 'Vishal@123'},
            {id: 10015, cancel: 1, gender: 'M', fName: 'Sagar', lName : 'Joshi', address : 'Kalyan', zip : '483821', contact: '6447844324', email : 'sagar@user.com', password : 'Sagar@123'},
      ],

      dummyDetails: [
            {id: 1000, fName: 'Yashodhan', lName : 'Chaudhari', hotelName: 'Dine Out', starRating: 5, address : 'Shirpur', zip : '425406', contact: '8765876689', email : 'dineout@hotel.com', password : 'Dine@123'},
            {id: 1001, fName: 'Manoj', lName : 'Badgujar', hotelName: 'Rubab', starRating: 4, address : 'Vani', zip : '400213', contact: '9876363523', email : 'rubab@hotel.com', password : 'Rubab@123'},
            {id: 1002, fName: 'Rohan', lName : 'Patil', hotelName: 'Stay', starRating: 2, address : 'Kolhapur', zip : '432521', contact: '7636357892', email : 'stay@hotel.com', password : 'Stay@123'},
            {id: 1003, fName: 'Swati', lName : 'Pandit', hotelName: 'Irani', starRating: 3, address : 'Dhule', zip : '445332', contact: '8475368487', email : 'irani@hotel.com', password : 'Irani@123'},
            {id: 1004, fName: 'Ajinkya', lName : 'Sonwane', hotelName: 'Kashmiry', starRating: 4, address : 'Nagpur', zip : '464457', contact: '9936467256', email : 'kashmiry@hotel.com', password : 'Kashmiry@123'}
      ]
}

const rootReducer = (state = initState, action)=>{
      if(action.type === "ADD_DETAIL"){
            const dummyDetails = [...state.dummyDetails]
            dummyDetails.push(action.detail)
            return{
                  ...state,
                  dummyDetails,
            }
      }
      else if(action.type === "ADD_USER_DETAIL"){
            const booking = [...state.booking]
            booking.push(action.detail)
            return{
                  ...state,
                  booking,
            }
      }
      return state
}

export default rootReducer
const RoomDto = require("../dtos.js/room.dto")
const roomService = require("../services/room-service")

 class roomsController{
    async create(req,res){
        const {topic,roomType}=req.body
        if(!topic || !roomType){
            res.status(402).json({
                message:"All fields are required"
            })
        }
        const room =await roomService.create({
            topic, roomType, ownerId:req.user._id
        })

        return res.json(new RoomDto(room))
    }
    async index(req,res){
        const rooms=await roomService.getAllRooms(['open'])
        const allrooms=rooms.map(room=>new RoomDto(room))
        res.json(allrooms)
    }
}
module.exports=new roomsController()
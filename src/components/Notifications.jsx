import { Box } from "@mui/material"
import { Tabs, message } from "antd"
import axios from "axios"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const backendUrl = 'https://medicoba.onrender.com';


const Notifications = () => {
    const navigate = useNavigate
    const { user } = useSelector(state => state.user)

    const handleMarkAllRead = async () => {
        try {
            const res = await axios.post(
                `${backendUrl}/api/v1/user/get-notification`,
                // "http://localhost:3000/api/v1/user/get-notification", 
                );
            if (res.data.success){
                message.success(res.data.message)
            } else {
                message.error(res.data.message)
            }
        } catch (error) {
            message.error("something went wrong")
        }
    }
    const handleDeleteMarkAllRead = async () => {
        try {
            const res = await axios.post(
                `${backendUrl}/api/v1/user/delete-notification`,
                // "http://localhost:3000/api/v1/user/delete-notification",
                );
            if (res.data.success){
                message.success(res.data.message)
            } else {
                message.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            message.error("something went wrong in notification")
        }
    }
  return (
    <div>
        <Box 
        display="flex"
        flexDirection={"column"}
        maxWidth={400}
        alignItems={"center"}
        justifyContent={"center"}
        margin="auto"
        marginTop={14}
        borderRadius={8}
        padding={3} 
        paddingTop={0}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{":hover":{
        boxShadow: "10px 10px 20px #ccc"
        }}}
        >
            <div className="text-color text-xl font-medium m-3">
                Your notifications
            </div>
            <Tabs>
                <Tabs.TabPane tab="unRead" key={0}>
                    <div>
                        <button className="bg-color 
                                 px-4 
                                 py-2 
                                 rounded-xl 
                                 text-slate-200
                                 hover:bg-slate-100
                                 hover:text-color
                                 hover:border-2
                                 hover:border-color" onClick={handleMarkAllRead}>
                             Mark All Read
                        </button>
                    </div>
                    {user?.notifications.map((notifiMsg) => (
                        <div key={notifiMsg.id} className="card" style={{ cursor: "pointer"}}>
                            <div className="card-text" onClick={() => navigate(notifiMsg.onClickPath)}>
                                {notifiMsg.message}
                            </div>
                        </div>
                    ))}
                </Tabs.TabPane>
                <Tabs.TabPane tab="Read" key={1}>
                    <div>
                        <button className="bg-color 
                                 px-4 
                                 py-2 
                                 rounded-xl 
                                 text-slate-200
                                 hover:bg-slate-100
                                 hover:text-color
                                 hover:border-2
                                 hover:border-color" onClick={handleDeleteMarkAllRead}>
                             Delete All Read
                        </button>
                    </div>
                    {user?.notifications.map((notifiMsg) => (
                        <div key={notifiMsg.id} className="card" style={{ cursor: "pointer"}}>
                            <div className="card-text" onClick={() => navigate(notifiMsg.onClickPath)}>
                                {notifiMsg.message}
                            </div>
                        </div>
                    ))}
                </Tabs.TabPane>
            </Tabs>
            
        </Box>
    </div>
  )
}

export default Notifications
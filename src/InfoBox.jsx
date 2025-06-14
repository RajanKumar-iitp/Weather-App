import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}) {
  const INIT_URL ="https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGR1c2t5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345, margin: "auto", mt: 5 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={INIT_URL} // Placeholder weather image
                title="Weather"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>

                        <p>the weather can be described as <i>{info.weather}</i> and feels like{" "}
                        {info.feelslike}&deg;C</p>
                </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}
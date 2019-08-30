import React from 'react'
import './RecommendationSection.css'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import user1 from "../../../shared/images/user1.jfif"
import user2 from "../../../shared/images/user2.jfif"
import user3 from "../../../shared/images/user3.jfif"


export default function RecommendationSection() {
    return (
        <div className="recommendationSectionWrapper">

            <p className="recommendationTitle">Recensioner</p>


            <Card className="card1">
                <CardHeader avatar={ <Avatar aria-label="Recipe">  <img className="image1"  src={user1} alt="Eng" /> </Avatar> }
                title="Elisabeth Vikander"/>
                <CardContent>
                <Typography component="p"> "Vivamus laoreet ante vel tellus aliquet, ac fringilla leo condimentum. Mauris in massa malesuada, fringilla massa accumsan, imperdiet sapien. Vestibulum suscipit blandit commodo. Nulla facilisi. Pellentesque in nisl diam." </Typography>
                </CardContent>
            </Card>

            <Card className="card2">
                <CardHeader avatar={ <Avatar aria-label="Recipe">  <img className="image1"  src={user2} alt="Eng" /> </Avatar> }
                title="Arasto Sahbaei"/>
                <CardContent>
                <Typography component="p"> "Vivamus laoreet ante vel tellus aliquet, ac fringilla leo condimentum. Mauris in massa malesuada, fringilla massa accumsan, imperdiet sapien. Vestibulum suscipit blandit commodo. Nulla facilisi. Pellentesque in nisl diam." </Typography>
                </CardContent>
            </Card>

            <Card className="card3">
                <CardHeader avatar={ <Avatar aria-label="Recipe">  <img className="image1"  src={user3} alt="Eng" /> </Avatar> }
                title="Amanda Cronberg"/>
                <CardContent>
                <Typography component="p"> "Vivamus laoreet ante vel tellus aliquet, ac fringilla leo condimentum. Mauris in massa malesuada, fringilla massa accumsan, imperdiet sapien. Vestibulum suscipit blandit commodo. Nulla facilisi. Pellentesque in nisl diam." </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TimerIcon from "@mui/icons-material/Timer";
import Meta from "@/assets/images/blog-images/meta.jpg";
import Headphone from "@/assets/images/blog-images/headphone.svg";
import Bitcoin from "@/assets/images/blog-images/bitcoin.svg";
import CustomContainer from "@/components/shared/custom-container";

type ArticleProps = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: any;
  readTime?: string;
};
const articles: ArticleProps[] = [
  {
    id: 1,
    title: "Meta Platforms plans to release fre...",
    date: "August 8, 2023",
    description:
      "The parent company of Facebook, Meta Platforms, is introducing software to help develop...",
    image: "@/assets/imgs/meta.jpg",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "8 Things You Probably Didn’t Know About Headphones",
    date: "March 28, 2023",
    description:
      "Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are almost always just hanging around the neck.",
    image: "@/assets/imgs/headphone.svg",
  },
  {
    id: 3,
    title: "Analyzing the August 17th Bitcoin Price Drop",
    date: "August 17, 2023",
    description:
      "On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8% in a 10-minute window, to a two-month low of under $26k. This pulled...",
    image: "@/assets/imgs/bitcoin.svg",
  },
];

export default function Blog() {
  return (
    <CustomContainer title={"Our Blogs"} hasLink={true}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ width: "350px", height: "378px" }}>
            <CardMedia component="img" image={Meta.src} className="h-44" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Meta Platforms plans to release...
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body2" color="text.disabled" component="p">
                  <CalendarMonthIcon />
                  August 8, 2023
                </Typography>
                <Typography variant="body2" color="text.disabled">
                  <TimerIcon />3 min read
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                The parent company of Facebook, Meta Platforms, is introducing
                software to help develop...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Box display="flex" flexDirection="column" gap={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: "796px", display: "flex" }}>
              <CardMedia
                component="img"
                height="100"
                image={Headphone.src}
                className="h-44 w-60"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  color="orange"
                  fontWeight="bold"
                  fontSize="16px"
                >
                  8 Things You Probably Didn’t Know About Headphones
                </Typography>
                <Typography
                  variant="body2"
                  fontSize="14px"
                  paragraph
                  color="text.secondary"
                >
                  Owning a headphone could mean a different thing for different
                  people. For some, it act as a fashion statement. It’s easy to
                  spot these people, the headphone are almost always just
                  hanging around the neck...
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="body2"
                    color="text.disabled"
                    component="p"
                  >
                    <CalendarMonthIcon />
                    March 28, 2023
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: "796px", display: "flex" }}>
              <CardMedia
                component="img"
                height="100"
                image={Bitcoin.src}
                className="h-44 w-60"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  fontWeight="bold"
                  fontSize="16px"
                >
                  Analyzing the August 17th Bitcoin Price Drop
                </Typography>
                <Typography
                  variant="body2"
                  fontSize="14px"
                  paragraph
                  color="text.secondary"
                >
                  On August 17th at 9:30PM UTC, Bitcoin’s price dropped more
                  than 8% in a 10-minute window, to a two-month low of under
                  $26k. This pulled...
                </Typography>

                <Typography variant="body2" color="text.disabled" component="p">
                  <CalendarMonthIcon />
                  August 17, 2023
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </CustomContainer>
  );
}

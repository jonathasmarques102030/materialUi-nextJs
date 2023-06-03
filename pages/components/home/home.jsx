import { TextField } from "@mui/material";
import Image from 'next/image';
import { Box } from '@mui/material';
import calendar from "../../../public/images/calendar.png";


export default function home() {
  return (
    <>
    <div className="flex">
    <div className="box">
    <h1 className="titulo">Adquira já o seu curso de nextJs</h1>
      <p className="paragrafo">
        Entre de cabeça nessa oportunidade que você ganha agora! Deixe o seu
        email com a gente!
      </p>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
    </div>
      <Box sx={{ width: { xs: "100%", sm: "390px" } }}>
        <Image
          src={calendar}
          alt="imagem de calendário"
          style={{ width: "100%" }}
        />
      </Box>
    </div>

    </>
  );
}

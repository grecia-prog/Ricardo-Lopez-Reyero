import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Btn, ContentBox, ImagePicture } from '../components/Styled';
import Hero from '../sections/Documentos/Hero';
import { Download } from '@mui/icons-material';
import EmotionalFreedomTechniqueImg from '../assets/img/Emotional_Fredom_technique.png';
import DocImg2 from '../assets/img/Estructura_del_ser.png';
import DocImg3 from '../assets/img/Los chakras.png';
import DocImg4 from '../assets/img/Sushumna.png';
import DocImg5 from '../assets/img/Saludo_al_sol.png';
import DocImg6 from '../assets/img/Evangelio.png';
import DocImg7 from '../assets/img/Diagrama_signos_zodiaco.png';
import DocImg8 from '../assets/img/Sutra_27.png';
import DocImg9 from '../assets/img/Dimensiones_del_universo.png';
import DocImg10 from '../assets/img/Cerebro_triuno.png';
import DocImg11 from '../assets/img/Reino_cuerpo_fisico.png';
import DocImg12 from '../assets/img/Chakras_Aura.png';
import DocImg13 from '../assets/img/Tipos_y_frecuencias_de_ritmos_cerebrales.png';
import DocImg14 from '../assets/img/Espectro_electromagnetico.png';
import DocImg15 from '../assets/img/Dont die.jpg';
import DocImg16 from '../assets/img/BRYAN JOHNSON’S COMPLETE 1.png';
import DocImg17 from '../assets/img/encarnacion_despertar_buscador.png';

const Bottom = lazy(() => import('../sections/Descargas/Bottom/Bottom'));

const Documentos = () => {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <ContentBox varwidth="100%" varmaxwidth="100%" vardisplay="flex">
      <Suspense fallback={<div>Cargando...</div>}>
        <Hero id="hero" />
        <ContentBox varwidth="100%" varmaxwidth="100%" vardisplay="flex" varpadding="50px 0 120px">
          <ContentBox varwidth="95%" varmaxwidth="1122px" vardisplay="flex" fdirection="row" varjustifycontent="space-around" style={{flexWrap: 'wrap', gap: '20px'}}>
            {(() => {
              const docItems = [
                { img: EmotionalFreedomTechniqueImg, varwidth: '100%', varmaxwidth: '100%', imgWidth: '100%', imgMaxWidth: '630px' },
                { img: DocImg2, varwidth: '30%', varmaxwidth: '240px' },
                { img: DocImg3, varwidth: '30%', varmaxwidth: '323px' },
                { img: DocImg4, varwidth: '30%', varmaxwidth: '323px' },
                { img: DocImg5, varwidth: '30%', varmaxwidth: '323px' },
                { img: DocImg6, varwidth: '30%', varmaxwidth: '323px' },
                { img: DocImg7, varwidth: '30%', varmaxwidth: '323px' },
                { img: DocImg8, varwidth: '100%', varmaxwidth: '100%', imgMaxWidth: '351px' },
                { img: DocImg9, varwidth: '100%', varmaxwidth: '100%', imgMaxWidth: '606px' },
                { img: DocImg10, varwidth: '100%', varmaxwidth: '100%', imgMaxWidth: '582px' },
                { img: DocImg11, varwidth: '40%', varmaxwidth: '100%', imgMaxWidth: '404px' },
                { img: DocImg12, varwidth: '40%', varmaxwidth: '100%', imgMaxWidth: '424px' },
                { img: DocImg13, varwidth: '100%', varmaxwidth: '100%', imgMaxWidth: '681px' },
                { img: DocImg14, varwidth: '65%', varmaxwidth: '100%', imgMaxWidth: '513px' },
                { img: DocImg15, varwidth: '30%', varmaxwidth: '100%', imgMaxWidth: '352px' },
                { img: DocImg16, varwidth: '100%', varmaxwidth: '100%', imgMaxWidth: '650px' },
                { img: DocImg17, varwidth: '100%', varmaxwidth: '100%', imgMaxWidth: '672px' },

              ];
              return docItems.map((item, idx) => (
                <ContentBox key={idx} varwidth={item.varwidth} varmaxwidth={item.varmaxwidth} vardisplay="flex" varpadding="100px 0 0" style={{flexDirection: 'column', alignItems: 'center'}}>
                  <ImagePicture src={item.img} varwidth={item.imgWidth || '100%'} varmaxwidth={item.imgMaxWidth || '100%'} vardisplay="flex" varpadding="0 0 16px" />
                  <a href={item.img} download style={{textDecoration: 'none'}}>
                    <Btn varwidth="100%" varmaxwidth="100%" vardisplay="flex" varpadding="12px 24px" varalignitems="center" varborder="none" varborderradius="4px" varcursor="pointer" backgcolor ="#9DA2EF" backgcolorhover="#585DCC">
                      <Download />
                      Descargar HD
                    </Btn>
                  </a>
                </ContentBox>
              ));
            })()}
          </ContentBox>
        </ContentBox>
        <Bottom id="compartir" />
      </Suspense>
    </ContentBox>
  );
};

export default Documentos;
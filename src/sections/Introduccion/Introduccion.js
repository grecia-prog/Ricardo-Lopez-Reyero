import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from "../../components/Styled.module.scss";
import stylesIntroduction from "./Introduccion.module.scss";
import { ContentBox, ImagePicture, RedHatDisplay } from '../../components/Styled';

const Introduccion = () => {
  let superleads = require('../../assets/img/Logotipo SuperLeads-01 (1) (1).png');
  let rlrmovil = require('../../assets/img/rlrmovil.webp');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Detectar si el dispositivo es móvil (por ejemplo, si el viewport es menor a 800px)
      setIsMobile(window.innerWidth <= 800);
    };

    // Ejecutar una vez al cargar la página
    handleResize();

    // Agregar un listener para manejar el cambio de tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Definir el fondo solo si no es móvil
  const backgroundImage = !isMobile
    ? { backgroundImage: `url(${require('../../assets/img/Ricardo_Lopez_Rayero_Introduccion.webp')})` }
    : { backgroundColor: '#020926' };  // Color de fondo para móviles


  return (
    <div className={stylesIntroduction.introduccionSection} style={backgroundImage}>
      <ContentBox
        varmaxwidth='1248px'
        varwidth='100%'
        varpadding='60px 0 27px'
        varpaddingm='30px 0px 27px'
        vardisplaymovil='flex'
      >
        <div className={stylesIntroduction.container}>
          <div className={styles.columnsAboveTitle}>
            <div className={styles.littleLine} />
            <div>
              <p className={styles.AboveTitleP}>
                <FormattedMessage
                  id="introduction.nameis"
                  defaultMessage='Mi nombre es'
                />
              </p>
            </div>
          </div>
          <div>
            <p className={styles.nameSans}>
              <FormattedMessage
                id="introduction.name"
                defaultMessage='Ricardo Lopez Reyero'
              />
            </p>

            <p className={styles.textSans}>
              <FormattedMessage
                id="introduction.abovetitle"
                defaultMessage='Ingeniero | Consultor digital | INT lover'
              />
            </p>
            <ContentBox
              vardisplaymovil='block'
              vardisplay='none'
              varmargin='19px 0 0'
            >
              <ImagePicture src={rlrmovil} varwidth='450px' varmaxwidth='100%' alt='ricardo_lopez_reyero' loading='lazy' />
            </ContentBox>
          </div>
          <div className={stylesIntroduction.contenText}>
            <p className={styles.descriptionRobotoP}>
              <FormattedMessage
                id="introduction.description.contenido"
                values={{
                  link1: <a href="https://ingenieridigital.mx" className={stylesIntroduction.enlace}>IngenieriaDigital.mx</a>,
                  link2: <a href="https://superleads.mx" className={stylesIntroduction.enlace}>SuperLeads.mx</a>,
                  strong: (chunks) => <strong>{chunks}</strong>,
                  br: <br />
                }}
                defaultMessage='descripcion'
              />
            </p>
          </div>
          <div className={stylesIntroduction.contentProyectos}>
            <a href='https://superleads.mx'>
              <img src={superleads} alt="SuperLeads_RicardoLopezRayero" className={stylesIntroduction.imgSL} loading='lazy' />
            </a>

          </div>
          <RedHatDisplay
            varfontsize='12.26px'
            varcolor='#fff'
            vartextalign='left'
            varpadding='48px 0 30px'
            smpadding='33px 10px 30px'
          >
            <FormattedMessage id='introduction.updated' defaultMessage='ultima actualizacion' />
          </RedHatDisplay>
        </div>
      </ContentBox>

    </div>
  );
};

export default Introduccion;
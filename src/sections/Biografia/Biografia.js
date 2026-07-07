import React, { Suspense, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './Biografia.scss'; // Assuming the custom styles are here.
import { Link } from 'react-router-dom';
import inicios1 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_1.webp';
import inicios2 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_2.webp';
import inicios3 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_3.webp';
import inicios4 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_4.webp';
import inicios5 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_5.webp';
import inicios6 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_6.webp';
import universidad1 from '../../assets/img/Ricardo_Lopez_Rayero_Universidad_1.webp'
import universidad2 from '../../assets/img/Ricardo_Lopez_Rayero_Universidad_2.webp'
import universidad3 from '../../assets/img/Ricardo_Lopez_Rayero_Universidad_3.webp'
import trabajos1 from '../../assets/img/Ricardo_Lopez_Rayero_primeros_trabajos_1.webp'
import trabajos2 from '../../assets/img/Ricardo_Lopez_Rayero_primeros_trabajos_2.webp'
import trabajos3 from '../../assets/img/Ricardo_Lopez_Rayero_primeros_trabajos_3.webp'
import id1 from '../../assets/img/Ricardo_Lopez_Rayero_Ingenieria_digital_1.webp'
import id2 from '../../assets/img/Ricardo_Lopez_Rayero_Ingenieria_digital_2.webp'
import id3 from '../../assets/img/Ricardo_Lopez_Rayero_Ingenieria_digital_3.webp'
import sp1 from '../../assets/img/Ricardo_Lopez_Rayero_SuperLeads_1.webp'
import sp2 from '../../assets/img/Ricardo_Lopez_Rayero_SuperLeads_2.webp'
import sp3 from '../../assets/img/Ricardo_Lopez_Rayero_SuperLeads_3.webp'
import int1 from '../../assets/img/Ricardo_Lopez_Rayero_Int_1.webp'
import int2 from '../../assets/img/Ricardo_Lopez_Rayero_Int_2.webp'
import int3 from '../../assets/img/Ricardo_Lopez_Rayero_Int_3.webp'
import personal1 from '../../assets/img/Ricardo_Lopez_Rayero_Vida_personal_1.webp'
import personal2 from '../../assets/img/Ricardo_Lopez_Rayero_Vida_personal_2.webp'
import personal3 from '../../assets/img/Ricardo_Lopez_Rayero_Vida_personal_3.png'
import conclusiones1 from '../../assets/img/Gratitud.png'
import conclusiones2 from '../../assets/img/perseverancia.png'
import conclusiones3 from '../../assets/img/enfoque.png'

import { Btn, ContentBox, Griditem, Gridwrapper, ImagePicture, RedHatDisplay, Roboto } from '../../components/Styled';
import styles from "../../components/Styled.module.scss";
import { AutoGraph, Check, ChevronLeft, ChevronRight, Download, PersonOutline, School, WorkOutline } from '@mui/icons-material';
import idPurple from '../../assets/img/id_purple.png'
import idGray from '../../assets/img/id_gray.png'
import spPurple from '../../assets/img/sp_purple.png'
import spGray from '../../assets/img/sp_gray.png'
import intGray from '../../assets/img/int_gray.png'
import intPurple from '../../assets/img/int_purple.png'
import { useIntl } from 'react-intl';

const Biografia = () => {
  const intl = useIntl(); // Usa el hook useIntl
  const [selectedSection, setSelectedSection] = useState('inicios');
  const [isMobile, setIsMobile] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const sections = {
    inicios: {
      icon: <Check className='icon' />,
      title: 'biografia.inicios.title',
      content: 'biografia.inicios.contenido',
      images: [
        inicios1, inicios2, inicios3, inicios4, inicios5, inicios6 // Add your image paths here
      ],
      contents: []
    },
    universidad: {
      icon: <School className='icon' />,
      title: 'biografia.universidad.title',
      content: 'biografia.universidad.contenido',
      images: [
        universidad1, universidad2, universidad3
      ],
      contents: []
    },
    trabajos: {
      icon: <WorkOutline className='icon' />,
      title: 'biografia.primerostrabajos.title',
      content: 'biografia.primerostrabajos.content',
      images: [
        trabajos1, trabajos2, trabajos3
      ],
      contents: []
    },
    id: {
      icon: [
        <ImagePicture key="id-gray" src={idGray} className='iconGray' alt='Ingenieria_Digital_by_Ricardo_Lopez_Reyero' />,
        <ImagePicture key="id-purple" src={idPurple} className='iconPurple' alt='Ingenieria_Digital_by_Ricardo_Lopez_Reyero_hover' />
      ],
      title: 'biografia.ingenieriaDigital.title',
      content: 'biografia.ingenieriaDigital.content',
      images: [
        id1, id2, id3
      ],
      contents: []
    },
    sp: {
      icon: [
        <ImagePicture key="sp-gray" src={spGray} className='iconGray' alt='SuperLeads_by_Ricardo_Lopez_Reyero' />,
        <ImagePicture key="sp-purple" src={spPurple} className='iconPurple' alt='SuperLeads_by_Ricardo_Lopez_Reyero_hover' />
      ],
      title: 'biografia.superLeads.title',
      content: 'biografia.superLeads.content',
      images: [
        sp1, sp2, sp3
      ],
      contents: []
    },
    int: {
      icon: [
        <ImagePicture key="int-gray" src={intGray} className='iconGray' alt='INT_by_Ricardo_Lopez_Reyero' />,
        <ImagePicture key="int-purple" src={intPurple} className='iconPurple' alt='INT_by_Ricardo_Lopez_Reyero_hover' />
      ],
      title: 'biografia.int.title',
      content: 'biografia.int.content',
      images: [
        int1, int2, int3
      ],
      contents: []
    },
    vidapersonal: {
      icon: <PersonOutline className='icon' />,
      title: 'biografia.vida.title',
      content: 'biografia.vida.content',
      images: [
        personal1, personal2, personal3
      ],
      contents: []
    },
    conclusiones: {
      icon: <AutoGraph className='icon' />,
      title: 'biografia.conclusiones.title',
      content: 'biografia.conclusiones.title',
      images: [
        conclusiones1, conclusiones2, conclusiones3
      ],
      contents: [
        'biografia.conclusiones.con1',
        'biografia.conclusiones.con2',
        'biografia.conclusiones.con3',
        'biografia.conclusiones.con4',
        'biografia.conclusiones.con5',
        'biografia.conclusiones.con6',
        'biografia.conclusiones.con7',
        'biografia.conclusiones.con8',
        'biografia.conclusiones.con9',
        'biografia.conclusiones.con10',
        'biografia.conclusiones.con11',
        'biografia.conclusiones.con12',
        'biografia.conclusiones.con13',
        'biografia.conclusiones.con14',
        'biografia.conclusiones.con15',
        'biografia.conclusiones.con16',
        'biografia.conclusiones.con17',
        'biografia.conclusiones.con18',
        'biografia.conclusiones.con19',
        'biografia.conclusiones.con20',
        'biografia.conclusiones.con21',
        'biografia.conclusiones.con22',
        'biografia.conclusiones.con23',
        'biografia.conclusiones.con24',
        'biografia.conclusiones.con25',
        'biografia.conclusiones.con26',
        'biografia.conclusiones.con27',
        'biografia.conclusiones.con28',
        'biografia.conclusiones.con29',
      ],
      frases: []
    },
    // Add other sections similarly
  };

  const sectionKeys = Object.keys(sections);

  // Detectar si es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consideramos móvil si el ancho es <= 768px
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Para establecer el estado inicial
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Funciones de navegación
  const handleNextSection = () => {
    const currentIndex = sectionKeys.indexOf(selectedSection);
    const nextIndex = (currentIndex + 1) % sectionKeys.length;
    setSelectedSection(sectionKeys[nextIndex]);
  };

  const handlePrevSection = () => {
    const currentIndex = sectionKeys.indexOf(selectedSection);
    const prevIndex = (currentIndex - 1 + sectionKeys.length) % sectionKeys.length;
    setSelectedSection(sectionKeys[prevIndex]);
  };

  const copyToClipboard = (id) => {
    const text = intl.formatMessage({ id });
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };


  return (
    <>
      {/* Toast notification */}
      <div style={{
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: showToast ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)',
        opacity: showToast ? 1 : 0,
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        pointerEvents: 'none',
        zIndex: 9999,
        background: 'linear-gradient(135deg, #585DCC 0%, #7B5EA7 100%)',
        color: '#fff',
        padding: '14px 28px',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(88, 93, 204, 0.35)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        fontFamily: 'Red Hat Display, sans-serif',
        fontWeight: '500',
        minWidth: '220px',
        justifyContent: 'center',
      }}>
        <span style={{ fontSize: '18px' }}>✓</span>
        Texto copiado
      </div>

      <ContentBox
        varmaxwidth='100%' varwidth='100%' vardisplay='flex' varpadding='120px 0 120px' varpaddingm='60px 0 60px'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <div className="biography-section">
            {/* Sidebar menu */}
            <div className="sidebar-menu">
              <div className={styles.columnsAboveTitleCenter}>
                <div className={styles.littleLine} />
                <div>
                  <p className={styles.AboveTitle}>
                    <FormattedMessage
                      id="biografia.title"
                      defaultMessage='titulo'
                    />
                  </p>
                </div>
              </div>
              <RedHatDisplay
                varfontsize='40px'
                varweight='700'
                varcolor='#232E35'
                varpadding='0 0 85px'
                fontsizemobile='22px'
              >
                <FormattedMessage id='biografia.subtitle' defaultMessage='subtitulo' />
              </RedHatDisplay>
              {Object.keys(sections).map(section => (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`menu-item ${selectedSection === section ? 'active' : ''}`}
                >
                  {sections[section].icon}
                  <FormattedMessage id={sections[section].title} defaultMessage='titulo de seccion' />
                  <ChevronRight className='angle' />
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className="content-area">
              {/* Flechas para cambiar secciones en móvil */}
              {isMobile && (
                <ContentBox
                  vardisplay='flex'
                  varwidth='100%'
                  varpadding='0 0 30px'
                >
                  <ContentBox>
                    <div className={styles.columnsAboveTitleCenter}>
                      <div className={styles.littleLine} />
                      <div>
                        <p className={styles.AboveTitle}>
                          <FormattedMessage
                            id="biografia.title"
                          />
                        </p>
                      </div>
                    </div>
                    <RedHatDisplay
                      varfontsize='40px'
                      varweight='700'
                      varcolor='#232E35'
                      varpadding='0 0 25px'
                      fontsizemobile='22px'
                    >
                      <FormattedMessage id='biografia.subtitle' defaultMessage='subtitulo' />
                    </RedHatDisplay>
                  </ContentBox>

                  <Gridwrapper vargridtemplatecolumns='20% 40% 20%' justifyContent='space-between' varwidth='96%'>
                    <Griditem>
                      <Btn onClick={handlePrevSection} className="prev-button" varpadding='5px 9px' aria-label="Anterior">
                        <ChevronLeft aria-hidden="true" />
                      </Btn>
                    </Griditem>
                    <Griditem>
                      <RedHatDisplay varfontsize='18px' varweight='500' varcolor='#585DCC' ><FormattedMessage id={sections[selectedSection].title} /></RedHatDisplay>

                    </Griditem>
                    <Griditem vardisplay='flex' alignItems='flex-end'>
                      <Btn onClick={handleNextSection} className="next-button" varpadding='5px 9px' aria-label="Siguiente">
                        <ChevronRight aria-hidden="true" />
                      </Btn>
                    </Griditem>
                  </Gridwrapper>
                </ContentBox>
              )}
              <div className="content-box">
                <div className='image-gallery'>
                  {sections[selectedSection]?.images?.map((imgSrc, index) => (
                    <img src={imgSrc} alt={`section-${selectedSection}-image-${index}`} key={index} loading='lazy' />
                  ))}
                </div>
                {selectedSection === 'conclusiones' ? (
                  <>
                    {sections.conclusiones.contents.map((paragraph, index) => (
                      <div key={index} className="paragraph-container">
                        <Roboto varfontsize='16px' varcolor='#595959' varweight='400' vartextalign='left' varlineheight='1.5em' varfontsizemobile='13px'>
                          <FormattedMessage id={paragraph} defaultMessage='contenido' />
                        </Roboto>
                        <Btn onClick={() => copyToClipboard(paragraph)} className="copy-button" vargridgap='10px' varcolor='#2A2FAB' varweight='400' backgcolor='#f0f0f000' varpadding='10px 48px' varfontsizemobile='12px' smpadd='6px 12px' vardropshadowmobile='none' varmargin='7px 0 0 auto'><Download className='icondownload' /> Copiar</Btn>
                      </div>
                    ))}
                    <RedHatDisplay varfontsize='26px' varcolor='#595959' varweight='600' vartextalign='left' varlineheight='1.5em' varfontsizemobile='18px'>
                      <FormattedMessage id='biografia.conclusiones.frases' defaultMessage='frases' />
                    </RedHatDisplay>
                    {sections.conclusiones.frases.map((paragraph, index) => (
                      <div key={index} className="paragraph-container">
                        <Roboto varfontsize='16px' varcolor='#595959' varweight='400' vartextalign='left' varlineheight='1.5em' varfontsizemobile='13px'>
                          <FormattedMessage id={paragraph} defaultMessage='contenido' />
                        </Roboto>
                        <Btn onClick={() => copyToClipboard(paragraph)} className="copy-button" vargridgap='10px' varcolor='#2A2FAB' varweight='400' backgcolor='#f0f0f000' varpadding='10px 48px' varfontsizemobile='12px' smpadd='6px 12px' vardropshadowmobile='none' varmargin='7px 0 0 auto'><Download className='icondownload' /> Copiar</Btn>
                      </div>
                    ))}
                    <Link to='/descargas' style={{ textDecoration: 'none' }}>
                      <Btn varmargin='24px auto 0' varwidth='60%' varminwidth='60%' varwidthmobile='80%'  >
                        Ir a Descargas
                      </Btn>
                    </Link>
                  </>
                ) : (
                  <Roboto
                    varfontsize='16px'
                    varcolor='#595959'
                    varweight='400'
                    vartextalign='left'
                    varlineheight='1.5em'
                    varfontsizemobile='16px'
                  >
                    <FormattedMessage
                      id={sections[selectedSection].content}
                      values={{
                        br: <br />,
                      }}
                      defaultMessage='contents'
                    />
                  </Roboto>
                )}
              </div>
            </div>
          </div>
        </Suspense>
      </ContentBox>
    </>
  );
};

export default Biografia;

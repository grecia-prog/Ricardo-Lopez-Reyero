import React from 'react'
import { ContentBox, RedHatDisplay, Roboto } from '../../components/Styled'
import './Hero.scss'
import styles from "../../components/Styled.module.scss";
import { FormattedMessage } from 'react-intl'

const Hero = ({ id }) => {
    return (
        <ContentBox
            id={id}
            className='SectionHero'
            vardisplay='flex'
            varminheight='361px'
            varwidth='100%'
            varmaxwidth='100%'
        >
            <ContentBox
                varwidth='95%'
                varmaxwidth='635px'
            >
                <div className={styles.columnsAboveTitleCenter}>
                    <div className={styles.littleLine} />
                    <div>
                        <p className={styles.AboveTitleP}>
                            <FormattedMessage
                                id="downloads.hero.aboutTitle"
                            />
                        </p>
                    </div>
                </div>
                <RedHatDisplay
                    varfontsize='48px'
                    varcolor='#fff'
                    varweight='600'
                    varpadding='0 0 32px'
                >
                    <FormattedMessage
                        id="documents.hero.title"
                    />
                </RedHatDisplay>
                <Roboto
                    varfontsize='18px'
                    varcolor='#fff'
                    varweight='400'
                    varlineheight='1.5em'
                    varfontsizemobile='16px'
                >
                    <FormattedMessage
                        id="documents.hero.description"
                    />
                </Roboto>
            </ContentBox>
        </ContentBox>
    )
}

export default Hero
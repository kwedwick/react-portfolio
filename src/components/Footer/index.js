import React from 'react';
import { ExternalLink } from 'react-external-link';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='social-icons'>
                <ExternalLink
                    className='social-icon-link instagram'
                    href='https://www.instagram.com/wedkee88/'
                    target='_blank'
                    aria-label='Instagram'
                >
                    <i className='fa fa-instagram' />
                </ExternalLink>
                <ExternalLink
                    className='social-icon-link twitter'
                    href='https://github.com/kwedwick'
                    target='_blank'
                    aria-label='Twitter'
                >
                    <i className='fa fa-github' />
                </ExternalLink>
                <ExternalLink
                    className='social-icon-link twitter'
                    href='https://www.linkedin.com/in/keegan-wedwick/'
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <i className='fa fa-linkedin' />
                </ExternalLink>
            </div>
        </footer>
    )
}

export default Footer

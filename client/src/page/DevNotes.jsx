import React from 'react';
import {PageHOC} from '../components';
import {useGlobalContext} from '../context';
import styles from '../styles';

const DevNotes = () => {
  const {} = useGlobalContext();
  
  return (
    <div>
        <h3 className={styles.joinHeadText}>Why does the wallet modal appear so frequently?</h3>
        <p className={styles.normalText}>If this is happening you're probably using the Brave Browser. <br/> Brave automatically asks for your permission to connect even if you've already connected before. <br/> If you find this annoying while playing, I suggest to switch to Chrome.</p>
        
    </div>
  )
};

export default 
PageHOC(
  DevNotes,
  <>Developer's Notes</>,
  <>
    <p className={styles.normalText}>Thank you so much for trying this little passion project out!</p>

    <a className={styles.infoText} c>Made with 💛 by Vaibhav , Rishbah, Protik , Bikas</a>
    <br/>
    <a className={styles.infoText} href="https://www.youtube.com/watch?v=C9ctoK4M9Bk">This project was made with the help of JS Mastery's youtube tutorial</a>
    </>
);
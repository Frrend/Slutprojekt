/**
 * Footer component represents the footer section of the application.
 * It includes information about opening hours, clinic hours, and contact details.
 */
export function Footer() {
    return <>
        {/* Footer */}
        <footer>
            <div className="footerLeftDiv">
                <div>
                    <h3>Öppettider:</h3>
                    <p>Telefontider mån-fre 8.00 - 16.00 Tel: 0550-80140</p>
                    <br/>
                </div>
                <div>
                    <h3>Kliniktider: </h3>
                    <p>måndag : eftermiddag</p>
                    <p>tisdag : förmiddag</p>
                    <p>torsdag : eftermiddag</p>
                    <p>fredag : förmiddag</p>
                </div>
            </div>
            <div className="footerRightDiv">
                <h3>Kiropraktorkliniken <br/>Kristinehamn</h3>
                <br/>
                <p>Doktor Enwalls väg 17 <br/>681 37 Kristinehamn</p>
                <br/>
                <p>Tel. 0550-801 40 <br/> mark.griffiths@telia.com</p>
            </div>
        </footer>
        {/* Footer End*/}
    </>;
}

import Footer from "./Tickets/Footer"
import Header from "./Tickets/Header"

const App=()=>{
    return <>
        <Header/>
        <div class="ticket">
            <div>MENÚ TICKET</div>
            <div>AFEGIR TICKETS</div>
            <div>
                LLISTA DE TICKETS
                <table class="llistaTickets">
                    <tbody>
                        <tr><td>TICKET 1</td></tr>
                        <tr><td>TICKET 2</td></tr>
                        <tr><td>TICKET 3</td></tr>
                        <tr><td>TICKET 4</td></tr>
                        <tr><td>TICKET 5</td></tr>
                        <tr><td>TICKET 6</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </>

}
export default App
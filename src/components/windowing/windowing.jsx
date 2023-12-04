import { FixedSizeList as List } from 'react-window';

function Windowing() {
    const Row = ({ index, style }) => (
        <div key={index} style={{...style, background:"blue",color:"white", padding:"5px", width:"100%"}}>
            Block -- {index}
        </div>
      );

    const render = () => {
        // return Array.from({length:10000}).fill(0).map((_,i) => (
        //     <div key={i} style={{background:"blue",color:"white", padding:"5px", width:"100%"}}>
        //         Block -- {i}
        //     </div>
        // ))

        return (
            <List
                height={500}
                itemCount={10000}
                itemSize={35}
                width={300}
            >
                {Row}
            </List>
        )
    }

    return(
        <div >
            {render()}
        </div>
    )
}

export default Windowing;
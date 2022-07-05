import './App.css';
import PriceCard from './PriceCard';

function App() {
  let data = [
    {
      animate:'w3-animate-left',
      d1:{
        content:'FREE',
        muted:false
      },
      d2:{
        content:'0',
        muted:false
      },
      d3:{
        content:'Single User',
        muted:false
      },
      d4:{
        content:'5GB Storage',
        muted:false
      },
      d5:{
        content:'Unlimited Public Projects',
        muted:false
      },
      d6:{
        content:'Community Access',
        muted:false
      },
      d7:{
        content:'Unlimited Private Projects',
        muted:true
      },
      d8:{
        content:'Dedicated Phone Support',
        muted:true
      },d9:{
        content:'Free Subdomain',
        muted:true
      },
      d10:{
        content:'Monthly Status Reports',
        muted:true
      },
    },
    {
      animate:'w3-animate-bottom',
      d1:{
        content:'PLUS',
        muted:false
      },
      d2:{
        content:'9',
        muted:false
      },
      d3:{
        content:'Single User',
        muted:false
      },
      d4:{
        content:'5GB Storage',
        muted:false
      },
      d5:{
        content:'Unlimited Public Projects',
        muted:false
      },
      d6:{
        content:'Community Access',
        muted:false
      },
      d7:{
        content:'Unlimited Private Projects',
        muted:false
      },
      d8:{
        content:'Dedicated Phone Support',
        muted:false
      },d9:{
        content:'Free Subdomain',
        muted:false
      },
      d10:{
        content:'Monthly Status Reports',
        muted:true
      },
    },
    {
      animate:'w3-animate-right',
      d1:{
        content:'PRO',
        muted:false
      },
      d2:{
        content:'49',
        muted:false
      },
      d3:{
        content:'Single User',
        muted:false
      },
      d4:{
        content:'5GB Storage',
        muted:false
      },
      d5:{
        content:'Unlimited Public Projects',
        muted:false
      },
      d6:{
        content:'Community Access',
        muted:false
      },
      d7:{
        content:'Unlimited Private Projects',
        muted:false
      },
      d8:{
        content:'Dedicated Phone Support',
        muted:false
      },d9:{
        content:'Free Subdomain',
        muted:false
      },
      d10:{
        content:'Monthly Status Reports',
        muted:false
      },
    },
   
  ]
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
        
        {data.map((e)=><PriceCard data={e}/>)}
        
      </div>
    </div>
  </section>
  );
}

export default App;

import './Components.css';
import Counter from '../../components/Counter/Counter'
import Timer from '../../components/Timer/Timer'
import Add from '../../components/Add/Add'
import Temperatures from '../../components/Temperatures/Temperatures';

function Components() {
  return (
    <div className='components-container'>
      <h1><span className='badge bg-dark'>REACT COMPONENTS</span></h1>
      <div className='components-container-grid'>
        <div className='box-1'>
          <Counter name={'Counter'} value={0}/>
        </div>
        <div className='box-2'>
          <Timer name={'Timer'} value={0}/>
        </div>
        <div className='box-3'>
          <Add name={'Add'}/>
        </div>
        <div className='box-4'>
          <Temperatures name={'Temperatures'} initCelsius={0}/>
        </div>
      </div>
      <h2><span className='badge bg-dark'>นายรัตนพล ศรีโนนยาง รหัส 66044213</span></h2>
    </div>
  )
}

export default Components

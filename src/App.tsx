
import MuiImageList from './component/MuiImageList';
import { MuiAppBar } from './component/MuiAppBar';
import { MuiDrawer } from './component/MuiDrawer';
import { MuiSpeedDial } from './component/MuiSpeedDial';
import { MuiBottomNavigation } from './component/MuiBottomNavigation';

function App() {
  return (
   <>
     {/* <MuiGrid/> */}
     {/* <MuiCard/> */}
     <MuiDrawer></MuiDrawer>
     <MuiAppBar></MuiAppBar>
     <MuiImageList></MuiImageList>
     <MuiSpeedDial></MuiSpeedDial>
     <MuiBottomNavigation/>
   </>
  );
}

export default App;

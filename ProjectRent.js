import React, { useState } from "react";
import { Typography, Button, IconButton, Grid, Avatar, Divider, Card, TableSortLabel } from "@mui/material";
import { Box } from "@mui/system";
import { Badge } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CalculateIcon from '@mui/icons-material/Calculate';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CircleIcon from '@mui/icons-material/Circle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import ProjectRentPie from './ProjectRentPie';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';







const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    root: {
        '& > *': {
            margin: 10,
            width: '25ch',
        },
    },
});



const rows = [{
    slno: 1,
    name: "Pandu",
    phonenumber: 8886204687,
    branch: "CSE",
    email: "pandu@gmail.com",
    fee: 100000
},

{
    slno: 2,
    name: "Karimulla",
    phonenumber: 8247820555,
    branch: "MECH",
    email: "karimulla@gmail.com",
    fee: 200000

},
{
    slno: 3,
    name: "Ramu",
    phonenumber: 9542532640,
    branch: "EEE",
    email: "ramu@gmail.com",
    fee: 300000

},
{
    slno: 4,
    name: "Swami",
    phonenumber: 9848851405,
    branch: "CIVIL",
    email: "swami@gmail.com",
    fee: 400000

},
{
    slno: 5,
    name: "Sumanth",
    phonenumber: 9666272538,
    branch: "MECH",
    email: "sumanth@gmail.com",
    fee: 500000

},

{
    slno: 6,
    name: "Anji",
    phonenumber: 9133840631,
    branch: "EEE",
    email: "angi@gmail.com",
    fee: 600000

},

{
    slno: 7,
    name: "Reshma",
    phonenumber: 7093882869,
    branch: "CSE",
    email: "reshma@gmail.com",
    fee: 700000

},

{
    slno: 8,
    name: "Sunil",
    phonenumber: 7671950350,
    branch: "CIVIL",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 9,
    name: "Krishna",
    phonenumber: 7671950350,
    branch: "CSE",
    email: "krishna@gmail.com",
    fee: 800000

},
{
    slno: 10,
    name: "MOKSHA",
    phonenumber: 7671950350,
    branch: "MECH",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 11,
    name: "Divya",
    phonenumber: 7671950350,
    branch: "EEE",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 12,
    name: "Panthlu",
    phonenumber: 7671950350,
    branch: "CSE",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 13,
    name: "AADHAYA",
    phonenumber: 7671950350,
    branch: "CSE",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 14,
    name: "PADMAJA",
    phonenumber: 7671950350,
    branch: "MECH",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 15,
    name: "PAVAN",
    phonenumber: 7671950350,
    branch: "CIVIL",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 16,
    name: "Panthlu",
    phonenumber: 7671950350,
    branch: "EEE",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 17,
    name: "Panthlu",
    phonenumber: 7671950350,
    branch: "CSE",
    email: "swami@gmail.com",
    fee: 800000

},
{
    slno: 18,
    name: "LUCKY",
    phonenumber: 7671950350,
    branch: "EEE",
    email: "swami@gmail.com",
    fee: 800000

},

];




export const UserContext=React.createContext();

const Exe10 = () => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [row, setRow] = React.useState(rows);
    const [newslno, setNewslno] = useState(null);
    const [newname, setNewname] = useState(null);
    const [newphonenumber, setNewphonenumber] = useState(null);
    const [newbranch, setNewbranch] = useState(null);
    const [newemail, setNewemail] = useState(null);
    const [newfee, setNewfee] = useState(null);
    const [selectindex, setSelectindex] = useState(null);
    const [mape, SetMape] = useState(row);


    // const [fbranch,setFbranch]=useState(null);
    // const [branch, setBranch] = React.useState(null);
    const CSE = "CSE";
    const MECH = "MECH";
    const EEE = "EEE";
    const CIVIL = "CIVIL";
    let selectBranch;
    let selectFee;
    let filterrow;


    

    const handleChange = (event) => {
        selectBranch = (event.target.value);
        console.log(selectBranch);
        //   if (selectBranch==="CSE") {
        filterrow = row.filter(row => row.branch.includes(selectBranch));
        SetMape(filterrow);

        // console.log(filterrow,"HI Baby Cse");
        // const index = (element) => element.branch==="CSE";
        // console.log(index);
        // console.log(filterrow.findIndex(index));
        //   }
        //   if (selectBranch==="EEE") {
        //     filterrow = row.filter(row=>row.branch.includes("EEE"));
        //    setFbranch(filterrow);
        //     console.log("HI Baby eee");

        //   }
        //   if (selectBranch==="MECH") {
        //     filterrow = row.filter(row=>row.branch.includes("MECH"));
        //    setFbranch(filterrow);
        //     console.log("HI Baby mech");

        //   }
        //   if (selectBranch==="CIVIL") {
        //     filterrow = row.filter(row=>row.branch.includes("CIVIL"));
        //    setFbranch(filterrow);
        //     console.log("HI Baby civil");

        //   }


    };
    const CseLength = (mape.filter(row=>row.branch.includes("CSE"))).length;
    const EeeLength = (mape.filter(row=>row.branch.includes("EEE"))).length;
    const CivilLength = (mape.filter(row=>row.branch.includes("CIVIL"))).length;
    const MechLength = (mape.filter(row=>row.branch.includes("MECH"))).length;
    // console.log(CseLength,"hi iam lenght")

 

    const handleChangefee = (event) => {
        selectFee = (event.target.value);
        // let feeFilter=[];
    
        console.log(selectFee);
        filterrow = mape.filter(row => row.fee.includes(selectFee));
        console.log(filterrow);
        SetMape(filterrow);
        // for(let i=0;mape.length>0;i++){
        //     if(mape[i].fee===selectFee){
        //         console.log(mape[i]);
        //         SetMape(mape[i]);
        //     };
        //     // SetMape([...feeFilter]);
        //     // SetMape(FeeSelect)
        // };

    //     console.log(selectFee);

    //     const filterrowFee = row.filter(row => row.fee.includes(selectFee));
    //    console.log( row.filter(person => person.fee < 200000));
    //     console.log(filterrowFee);

    //     SetMape(filterrowFee);
    }



    const handleChangeSearch = (event, searched) => {
        searched = (event.target.value);
        console.log(searched, "search information");
        let searching = row.filter(row => row.name.toLowerCase().includes(searched.toLowerCase()));
        SetMape(searching);
        
    }

    // function mapping(){
    //     console.log(fbranch,"hi baby");
    //     if(fbranch!==null){
    //         return fbranch;

    //     } 
    //     if(search!==null){
    //         return search;

    //     }
    //     if(fbranch===null){
    //         return row;
    //     }

    // };






    const [sortDirection, setSortDirection] = useState("asc");
    const [sortColumn, setSortColumn] = useState("slno");
    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        }
        else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };

    const sortData = (data) => {
        return data.sort((a, b) => {
            if (sortDirection === 'asc') {
                return a[sortColumn] > b[sortColumn]
                    ? 1 : -1;
            }
            else {
                return a[sortColumn] < b[sortColumn]
                    ? 1 : -1;
            }
        });
    }


    // const handleFilterCse = () => {
    //     // for(let i=0;row.length > 0;i++){
    //     //     if(row[i].branch===fbranch){
    //     //         setRow(row[i]);

    //     //         console.log(fbranch);
    //     //     };

    //     // };
    //    const filterrow = row.filter(row=>row.branch.includes("CSE"));
    //    setFbranch(filterrow);
    // };

    // const handleFilterEee=()=>{
    //     const filterrow = row.filter(row=>row.branch.includes("EEE"));
    //     setFbranch(filterrow);

    // }

    // const handleFilterMech=()=>{
    //     const filterrow = row.filter(row=>row.branch.includes("MECH"));
    //     setFbranch(filterrow);

    // }

    // const handleFilterCivil=()=>{
    //     const filterrow = row.filter(row=>row.branch.includes("CIVIL"));
    //     setFbranch(filterrow);

    // }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    function handleDelete(i) {
        console.log(i, "deleted");
        mape.splice(i, 1);
        setRow([...row]);
    }
    function handleEditOk() {

        console.log(selectindex);
        setOpen1(false);
        mape.splice(selectindex, 1, {
            name: newname,
            slno: newslno,
            email: newemail,
            branch: newbranch,
            phonenumber: newphonenumber,
            fee: newfee,

        });
        console.log(mape[selectindex].newname);
        SetMape([...mape]);
    }




    function handleEdit(i) {

        handleClickOpen1();
        setSelectindex(i);
        setNewslno(mape[i].slno);
        setNewname(mape[i].name);
        setNewphonenumber(mape[i].phonenumber);
        setNewbranch(mape[i].branch);
        setNewemail(mape[i].email);
        setNewfee(mape[i].fee);
        console.log(i, "hi iam index");
    }

    //     function filterBranch(){
    //     let newstudent=[]
    //     for(let student of rows){
    //         if(student.branch==="CIVIL"){
    //             newstudent.push(student)
    //         }
    //         console.log(newstudent);

    //     }
    // }
    // filterBranch();


    // const [filterBranchCse,setFilterBranchCse]=useState(null);
    // function fliterme(){

    // setFilterBranchCse(row.filter(row.branch.includes("CSE")));
    // console.log(filterBranchCse);
    // }


    // function filterBranch(){
    //     console.log("Hi to")
    //     rows.map((row,i) => (
    //         if(row[i].branch==="CSE"){
    //             fbranch.push(row[i]);
    //         }

    //     ))
    //     console.log(row);

    //     for(let student in row){
    //         console.log(student);
    //         if(student.branch==="CSE"){
    //             console.log(row);
    //             setFbranch.push(student);
    //             console.log(fbranch);
    //         }


    //     }
    // }
    // filterBranch();
    // // console.log(row);





    const handleClose = () => {
        setOpen(false);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleAdd = () => {
        let errorList = []
        if (errorList.newname === undefined) {
            errorList.push("Please enter first name")
        }
        if (errorList.newslno === undefined) {
            errorList.push("Please enter last name")
        }
        if (errorList.email === undefined) {
            errorList.push("Please enter a valid email")
        }
        SetMape([...mape, {
            slno: newslno,
            name: newname,
            email: newemail,
            phonenumber: newphonenumber,
            branch: newbranch,
            fee: newfee,

        }]);
        setNewslno(null);
        setNewname(null);
        setNewemail(null);
        setNewbranch(null);
        setNewfee(null);
        setNewphonenumber(null);
        setOpen(false);


    };

    const classes = useStyles();


    
    return (
        
        <div>
            <UserContext.Provider value={CseLength}>
            <Grid container xs={12} >
                <Grid item xs={12}   >
                    <Box sx={{ flexGrow: 1 }} >
                        <AppBar position="fixed" style={{ color: "black", backgroundColor: "#ffffff" }}>
                            <Toolbar>

                                <Grid container spacing={3}>
                                    <Grid item xs={0.6} style={{ textAlign: "center" }}>
                                        <MenuIcon style={{ height: "30px", width: "30px", marginLeft: "-10px" }} />

                                    </Grid>
                                    <Grid item flexDirection={"row"} style={{}}>
                                        <Avatar src="JPm1.png" style={{ width: 140, height: 50, marginTop: "-10px" }} />
                                    </Grid>

                                    <Grid item xs={6.3}>
                                    </Grid>
                                    <Grid item>
                                        <SearchIcon />
                                    </Grid>
                                    <Grid item>
                                        <Badge color="secondary" badgeContent="" overlap="circular" variant="dot">
                                            <MessageIcon />
                                        </Badge>
                                    </Grid>
                                    <Grid item>
                                        <Badge color="secondary" badgeContent="" overlap="circular" variant="dot">
                                            <NotificationsIcon />
                                        </Badge>
                                    </Grid>
                                    <Grid item>
                                        <Grid container spacing={1} style={{ padding: "2px 2px 2px 12px" }}>
                                            <Grid item style={{ marginTop: "-10px" }}>
                                                <Avatar
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIBYm3216KZRonMWBQo1OQ-4aL7msuZhwkjZ0aKjdid2M_AcEIFec_oBnGPwEuNgxFII&usqp=CAU" />
                                            </Grid>
                                            <Grid item>
                                                <Typography>Jill Buffett</Typography>
                                            </Grid>
                                            <Grid item>
                                                <ArrowDropDownIcon style={{ marginLeft: "6px" }} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Box>

                </Grid>
            </Grid>
            <Grid container style={{ marginTop: "60px" }}>
                <Grid item position={"fixed"} xs={0.6}>
                    <Card>
                        <Grid container style={{ height: "80vh" }} >
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }} >
                                <HomeIcon />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }}>
                                <DashboardIcon />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }}>
                                <PeopleIcon />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }}>
                                <PinDropIcon />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }} >
                                <ShowChartIcon />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }}>
                                <CalculateIcon />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }}>
                                <VolunteerActivismIcon />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }}>
                                <DashboardIcon />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }}>
                                <Avatar style={{ marginLeft: "10px" }}><HomeWorkIcon style={{ color: "#6b63a1" }} /></Avatar>
                            </Grid>
                            <Grid item xs={12} style={{ textAlign: "center", padding: "10px 0px 0px 0px" }}>
                                <CreditCardIcon />
                            </Grid>

                        </Grid>
                        <Grid container xs={12} style={{ height: "249vh" }}>

                        </Grid>
                    </Card>


                </Grid>
                <Grid style={{ marginLeft: "60px" }} item xs={12} >
                    <Grid container style={{ padding: "20px 30px 0px 30px", height: "22vh", backgroundColor: "#2f2d46" }} >
                        {/* <Grid item >
                            <KeyboardArrowLeftIcon style={{ color: "#ffffff" }} />
                        </Grid> */}
                        {/* <Grid item >
                            <Typography style={{ color: "#ffffff", fontSize: "14px" }} > Dashboard</Typography>

                        </Grid> */}
                        <Grid container>

                            <Grid item xs={12} textAlign={"center"}>
                                <Typography style={{ color: "#ffffff", fontSize: "30px" }}>Student Data Table</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} style={{ height: "238vh", backgroundColor: '#f7f6f5', padding: "20px 20px 20px 20px" }}>
                        <Grid item xs={12} textAlign={"end"} style={{ marginTop: "-44px", marginRight: "20px" }}>
                            <Button onClick={handleClickOpen} style={{ backgroundColor: "#ed8b00", color: "#312e45", borderRadius: 50, width: "170px", PaddingLeft: "-4px" }}>
                                <IconButton><AddSharpIcon style={{ color: "#312e45", marginLeft: "-8px" }} /></IconButton>
                                ADD STUDENT
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description">
                                <DialogTitle id="alert-dialog-title">{"Add Student Details"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        <form className={classes.root} >
                                            <TextField id="textSlNo" label="Sl.No" onChange={(event) => setNewslno(event.target.value)} variant="outlined" />
                                            <TextField id="textName" label="Name" onChange={(event) => setNewname(event.target.value)} variant="outlined" />
                                            <TextField id="textPhoneNumber" label="Phone Number" onChange={(event) => setNewphonenumber(event.target.value)} variant="outlined" />

                                            <Select
                                                labelId="demo-simple-select"
                                                label="Branch"
                                                variant="outlined"
                                                onChange={(event) => setNewbranch(event.target.value)} >
                                                <MenuItem value="CSE">CSE</MenuItem>
                                                <MenuItem value="EEE">EEE</MenuItem>
                                                <MenuItem value="MECH">MECH</MenuItem>
                                                <MenuItem value="CIVIL">CIVIL</MenuItem>
                                            </Select>

                                            <TextField id="textEmail" label="Email" onChange={(event) => setNewemail(event.target.value)} variant="outlined" />
                                            <Select
                                                labelId="demo-simple-select"
                                                label="Branch"
                                                id="textFee"
                                                variant="outlined"
                                                onChange={(event) => setNewfee(event.target.value)} >
                                                <MenuItem value={1000}>0 to 100000</MenuItem>
                                                <MenuItem value={100000}>100000 to 200000</MenuItem>
                                                <MenuItem value={200000}>200000 to 300000</MenuItem>
                                                <MenuItem value={300000}>300000 to 400000</MenuItem>
                                                <MenuItem value={400000}>400000 to 500000</MenuItem>
                                                <MenuItem value={500000}>500000 to 600000</MenuItem>
                                                <MenuItem value={600000}>600000 to 700000</MenuItem>
                                                <MenuItem value={700000}>700000 to 800000</MenuItem>
                                                <MenuItem value={800000}>800000 to 900000</MenuItem>
                                                <MenuItem value={900000}>900000 to 1000000</MenuItem>

                                            </Select>

                                        </form>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleAdd} color="primary" >
                                        Save
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Grid container>

                                <Grid container style={{ marginBottom: "20px" }}>
                                    <Typography style={{ color: "#2f2d46", fontSize: "20px" }}>Student Details FilterList</Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} >
                                <Grid item>
                                    {/* <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Branch"
          onChange={handleChange}
        >
          <MenuItem value={10}>CSE</MenuItem>
          <MenuItem value={20}>MECH</MenuItem>
          <MenuItem value={30}>EEE</MenuItem>
          <MenuItem value={30}>CIVIL</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
                                    {/* <Card variant="outlined" style={{ border: "1px solid #d7d2cb", backgroundColor: "#ffffff", borderRadius: 0, }}>
                                        <Grid container style={{ height: "40px", width: "140px", padding: "1px 2px 1px 10px" }}>
                                            <Grid item textAlign={"left"} xs={10}>
                                                <Typography style={{ color: "#b6b5be", fontSize: "12px" }}>Month period</Typography>
                                                <Typography style={{ color: "#3b3950", fontSize: "14px" }}>Monthly</Typography>
                                            </Grid>
                                            <Grid item textAlign={"center"} style={{ paddingTop: "5px" }} xs={2}>
                                                <ArrowDropDownIcon />
                                            </Grid>
                                        </Grid>

                                    </Card> */}
                                    <Box sx={{ minWidth: 90 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={selectBranch}
                                                label="Branch"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={CSE} >CSE</MenuItem>
                                                <MenuItem value={MECH}>MECH</MenuItem>
                                                <MenuItem value={EEE}>EEE</MenuItem>
                                                <MenuItem value={CIVIL} >CIVIL</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box sx={{ minWidth: 180 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">FEE</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={selectFee}
                                                label="FEE"
                                                onChange={handleChangefee}
                                            >
                                                <MenuItem value={1000}>0 to 100000</MenuItem>
                                                <MenuItem value={100000}>100000 to 200000</MenuItem>
                                                <MenuItem value={200000}>200000 to 300000</MenuItem>
                                                <MenuItem value={300000}>300000 to 400000</MenuItem>
                                                <MenuItem value={400000}>400000 to 500000</MenuItem>
                                                <MenuItem value={500000}>500000 to 600000</MenuItem>
                                                <MenuItem value={600000}>600000 to 700000</MenuItem>
                                                <MenuItem value={700000}>700000 to 800000</MenuItem>
                                                <MenuItem value={800000}>800000 to 900000</MenuItem>
                                                <MenuItem value={900000}>900000 to 1000000</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                {/* <Grid item>
                                    <Button style={{ backgroundColor: "#e8e1d9", color: "#c0bfc7", height: "40px", width: "100px", borderRadius: 50 }}>Apply</Button>
                                </Grid> */}
                            </Grid>
                            <Grid container textAlign={"left"}>
                                <Grid item xs={9}>
                                    <Grid container spacing={6} style={{ padding: "70px 20px 70px 20px" }}>
                                        <Grid item >
                                            <Grid container>
                                                
                                                <Grid item>
                                                    <Typography  style={{ fontSize: "40px", fontWeight: "bold", color: "#2f2d46" }}>{CseLength} CSE</Typography>

                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1}>

                                                {/* <Grid item>
                                                    <Typography style={{ fontSize: "14px", color: "#828190" }}>Total expected</Typography>
                                                </Grid> */}
                                            </Grid>
                                        </Grid>
                                        <Grid item >
                                            <Grid container>
                                                {/* <Grid item >
                                                    <Typography style={{ fontSize: "24px", marginTop: "16px", fontFamily: "monospace", color: "#828190" }}>$</Typography>
                                                </Grid> */}
                                                <Grid item>
                                                    <Typography style={{ fontSize: "40px", fontWeight: "bold", color: "#2f2d46" }}>{EeeLength} EEE</Typography>

                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1}>
                                                {/* <Grid item>
                                                    <CircleIcon style={{ color: "#5d8bb9", height: "20px", width: "20px" }} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography style={{ fontSize: "14px", color: "#828190" }}>Paid</Typography>
                                                </Grid> */}
                                            </Grid>
                                        </Grid>
                                        <Grid item >
                                            <Grid container>
                                                {/* <Grid item >
                                                    <Typography style={{ fontSize: "24px", marginTop: "16px", fontFamily: "monospace", color: "#828190" }}>$</Typography>
                                                </Grid> */}
                                                <Grid item>
                                                    <Typography style={{ fontSize: "40px", fontWeight: "bold", color: "#2f2d46" }}>{MechLength} MECH</Typography>

                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1}>
                                                {/* <Grid item>
                                                    <CircleIcon style={{ color: "#d57d00", height: "20px", width: "20px" }} />
                                                </Grid> */}
                                                {/* <Grid item>
                                                    <Typography style={{ fontSize: "14px", color: "#828190" }}>Due</Typography>
                                                </Grid> */}
                                            </Grid>
                                        </Grid>
                                        <Grid item >
                                            <Grid container>
                                                {/* <Grid item >
                                                    <Typography style={{ fontSize: "24px", marginTop: "16px", fontFamily: "monospace", color: "#828190" }}>$</Typography>
                                                </Grid> */}
                                                <Grid item>
                                                    <Typography style={{ fontSize: "40px", fontWeight: "bold" }}>{CivilLength} CIVIL</Typography>

                                                </Grid>
                                                {/* <Grid item style={{ marginTop: "20px" }}>
                                                    <ReportProblemIcon style={{ height: "30px", width: "30px", color: "#ba482e" }} />
                                                </Grid> */}
                                            </Grid>
                                            <Grid container spacing={1}>
                                                {/* <Grid item>
                                                    <CircleIcon style={{ color: "#ba482e", height: "20px", width: "20px" }} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography style={{ fontSize: "14px", color: "#828190" }}>Past Due</Typography>
                                                </Grid> */}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    <ProjectRentPie />
                                    {/* <Grid item style={{ marginTop: "-140px", marginLeft: "100px" }}>
                                        <Typography style={{ fontSize: "34px" }}>50 <span style={{ fontSize: "20px", color: "#8f8e9c", marginLeft: "-5px" }}>%</span></Typography>
                                        <Typography style={{ fontSize: "20px", color: "#8f8e9c", marginTop: "-8px" }}>Paid</Typography>
                                    </Grid> */}
                                </Grid>

                            </Grid>
                            <Grid container >
                                <Grid item xs={12} style={{ padding: "20px 0px 0px 0px" }}>
                                    <Card style={{ borderRadius: "0px", backgroundColor: "#ffffff", border: "0px" }} >
                                        <Paper
                                            component="form"
                                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                                        >

                                            <InputBase
                                                sx={{ ml: 1, flex: 1 }}
                                                placeholder="Search Student Table"
                                                onChange={handleChangeSearch}

                                            />
                                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                                <SearchIcon />
                                            </IconButton>

                                        </Paper>



                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item xs={12}>
                                    <Grid container style={{ marginTop: "0px" }}>
                                        <Box sx={{ height: 631, width: "100%" }}>
                                            <TableContainer component={Paper}>
                                                <Table className={classes.table} size="small" aria-label="a dense table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell><TableSortLabel active={sortColumn === "slno"}
                                                                direction={sortDirection} onClick={() => handleSort("slno")} >Sl.No</TableSortLabel></TableCell>
                                                            <TableCell align="left"><TableSortLabel active={sortColumn === "name"}
                                                                direction={sortDirection} onClick={() => handleSort("name")} >Name</TableSortLabel></TableCell>
                                                            <TableCell align="left"><TableSortLabel active={sortColumn === "phonenumber"}
                                                                direction={sortDirection} onClick={() => handleSort("phonenumber")} >Phone Number</TableSortLabel></TableCell>
                                                            <TableCell align="left"><TableSortLabel active={sortColumn === "branch"}
                                                                direction={sortDirection} onClick={() => handleSort("branch")} >Branch</TableSortLabel></TableCell>
                                                            <TableCell align="left"><TableSortLabel active={sortColumn === "email"}
                                                                direction={sortDirection} onClick={() => handleSort("email")} >Email</TableSortLabel></TableCell>
                                                            <TableCell align="left"><TableSortLabel active={sortColumn === "fee"}
                                                                direction={sortDirection} onClick={() => handleSort("fee")} >Fee</TableSortLabel></TableCell>
                                                            <TableCell align="center">Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {sortData(mape).map((row, i) => (
                                                            <TableRow >
                                                                <TableCell align="left" >{row.slno}</TableCell>
                                                                <TableCell align="left"> {row.name}</TableCell>
                                                                <TableCell align="left">{row.phonenumber}</TableCell>
                                                                <TableCell align="left">{row.branch}</TableCell>
                                                                <TableCell align="left">{row.email}</TableCell>
                                                                <TableCell align="left">{row.fee}</TableCell>
                                                                <TableCell align="center"><Button onClick={() => handleEdit(i)}>Edit</Button> <Button onClick={() => handleDelete(i)}>Delete</Button></TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>

                                                    <Dialog
                                                        open={open1}
                                                        onClose={handleClose1}
                                                        aria-labelledby="alert-dialog-title"
                                                        aria-describedby="alert-dialog-description"
                                                    >
                                                        <DialogTitle id="alert-dialog-title">{"Edit Student Details"}</DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText id="alert-dialog-description">
                                                                <form className={classes.root} >
                                                                    <TextField id="textSlNo" label="Sl.No" value={newslno} onChange={(event) => setNewslno(event.target.value)} variant="outlined" />
                                                                    <TextField id="textName" label="Name" value={newname} onChange={(event) => setNewname(event.target.value)} variant="outlined" />
                                                                    <TextField id="textPhoneNumber" label="Phone Number" value={newphonenumber} onChange={(event) => setNewphonenumber(event.target.value)} variant="outlined" />

                                                                    <TextField id="textBranch" label="Branch" value={newbranch} onChange={(event) => setNewbranch(event.target.value)} variant="outlined" />
                                                                    <TextField id="textEmail" label="Email" value={newemail} onChange={(event) => setNewemail(event.target.value)} variant="outlined" />
                                                                    <TextField id="textFee" label="Fee" value={newfee} onChange={(event) => setNewfee(event.target.value)} variant="outlined" />
                                                                </form>
                                                            </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose1} color="primary">
                                                                Cancel
                                                            </Button>
                                                            <Button onClick={handleEditOk} color="primary" >
                                                                Save
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>

                                                </Table>
                                            </TableContainer>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>



                    </Grid>


                    <Grid container xs={12} style={{ backgroundColor: "#2f2d46", height: "55vh", marginTop: 0 }}>
                        <Grid item xs={12}>
                            <Grid container justifyContent={"space-between"} style={{ padding: "10px 30px 10px 30px" }}>
                                <Grid item >
                                    <Typography style={{ color: "#f8f8f9" }}>Questions? Contact us.</Typography>
                                </Grid>
                                <Grid item >
                                    <Grid container>
                                        <Grid item>
                                            <Avatar src="JPm2.png" style={{ width: 140, height: 50, marginTop: "-10px" }} />

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <CallIcon style={{ color: "#f8f8f9" }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: "#f8f8f9", fontFamily: "AmplitudeWide-Light" }}>+1 877 344 3080</Typography>
                                    </Grid>
                                    <Grid item style={{ paddingLeft: "30px" }}>
                                        <MailIcon style={{ color: "#f8f8f9" }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: "#f8f8f9", fontFamily: "AmplitudeWide-Light" }}>story.support@jpmorgan.com</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Divider style={{ backgroundColor: "#f8f8f9", margin: "20px 30px 20px 30px" }} />
                            <Grid container xs={12} spacing={1} style={{ padding: "5px 30px 20px 30px" }}>
                                <Grid item xs={3.5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "14px", fontFamily: "AmplitudeWide-Regular" }}>J.P. Morgan Sites</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "14px", fontFamily: "AmplitudeWide-Regular" }}>Legal</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>JPMorgan Chase & Co.</Typography>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>Chase</Typography>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>Privacy & Security</Typography>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>Regulatory Disclosures</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>Data Privacy Protocol</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>J.P. Morgan</Typography>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>J.P. Morgan CRE</Typography>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>Terms of Use</Typography>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>Cookie Policy</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography style={{ color: "#f8f8f9", fontSize: "12px", fontFamily: "AmplitudeWide-Light" }}>Accessibility</Typography>
                                </Grid>

                            </Grid>
                            <Divider style={{ backgroundColor: "#f8f8f9", margin: "20px 30px 10px 30px" }} />
                            <Grid container style={{ padding: "0px 20px 20px 30px" }}>
                                <Grid item >
                                    <Grid container>
                                        <Grid item>
                                            <Avatar style={{ fontSize: "10px", fontWeight: "bold", height: "10px", width: "10px", textAlign: "center", backgroundColor: "#2f2d46", color: "#9595a1", border: "1px solid #9d9ca8", fontFamily: "AmplitudeWide-Regular", paddingTop: "0px", marginTop: "3px", marginRight: "4px" }}>C</Avatar>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ color: '#9595a1', fontSize: '12px', fontFamily: "AmplitudeWide-Light" }}>2020 JPMorgan Chase & Co.All rights reserved,"JPMorgan,""JPMorgan Chase,"the JPMorgan Chase logo,"Story," and  "Story by J.P. Morgan" are trademarks of JPMorgan Chase Bank, N.A. JPMorgan Chase Bank,</Typography>
                                        </Grid>
                                    </Grid>

                                    <Typography style={{ color: '#9595a1', fontSize: '12px', fontFamily: "AmplitudeWide-Light" }}>N.A. is a Wholly-owned subsidiary of JPMorgan Chase & Co.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>

            </Grid>
            </UserContext.Provider>

        </div>
    )
}
export default Exe10;
import React, { useRef } from "react";
import CameraIcon from "@/assets/icons/CameraIcon";
import CloseIcon from "@/assets/icons/CloseIcon";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
  
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    color:'White',
    
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
  
const ProfileEditForm = ({ onCloseForm }) => {
  const handleChange = (event) => {
    setNationality(event.target.value);
  }
  const [nationality, setNationality] = React.useState('');
  const nameRef = useRef();
  const nationalityRef = useRef();
  const twitterRef = useRef();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const formData = {
      name: nameRef.current.value,
      nationality: nationalityRef.current.value,
      twitter: twitterRef.current.value,
    };
    console.log(formData);
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      className="bg-[#011740]  px-8 pb-10 pt-5  grid place-items-center gap-y-5 text-white font-Montserrat tracking-wide border-[#B8C0CC] border rounded-md absolute top-0 left-1/2 -translate-x-1/2 max-w-[98%] w-[520px]"
    >
      <button type="button" onClick={onCloseForm} className="w-fit ml-auto">
        <CloseIcon />
      </button>
      <div>
        <label
          htmlFor="image"
          className="rounded-full border border-white w-[190px] h-[190px] flex items-center justify-center"
        >
          <CameraIcon />
        </label>
        <input type="file" name="image" id="image" hidden />
      </div>
      <div className="flex gap-2 flex-col w-full">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="Name"
          id="Name"
          ref={nameRef}
          className="bg-[#011335] border  px-3 border-white rounded h-10 focus:outline-blue-500 "
          maxlength="12"
        />
      </div>
      <div className="flex gap-2 flex-col w-full">
        {/* <label htmlFor="Nationality">Nationality</label>
        <input
          type="text"
          name="Nationality"
          id="Nationality"
          ref={nationalityRef}
          className="bg-[#011335] border px-3  border-white rounded h-10 focus:outline-blue-500 "
        /> */}
        <label htmlFor="Nationality">Nationality</label>
         <Box sx={{ minWidth: 120 }}>
         <FormControl  variant="standard" fullWidth>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={nationality}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="afghan">Afghan</MenuItem>
          <MenuItem value="albanian">Albanian</MenuItem>
          <MenuItem value="algerian">Algerian</MenuItem>
          <MenuItem value="american">American</MenuItem>
          <MenuItem value="andorran">Andorran</MenuItem>
          <MenuItem value="angolan">Angolan</MenuItem>
          <MenuItem value="antiguans">Antiguans</MenuItem>
          <MenuItem value="argentinean">Argentinean</MenuItem>
          <MenuItem value="armenian">Armenian</MenuItem>
          <MenuItem value="australian">Australian</MenuItem>
          <MenuItem value="austrian">Austrian</MenuItem>
          <MenuItem value="azerbaijani">Azerbaijani</MenuItem>
          <MenuItem value="bahamian">Bahamian</MenuItem>
          <MenuItem value="bahraini">Bahraini</MenuItem>
          <MenuItem value="bangladeshi">Bangladeshi</MenuItem>
          <MenuItem value="barbadian">Barbadian</MenuItem>
          <MenuItem value="barbudans">Barbudans</MenuItem>
          <MenuItem value="batswana">Batswana</MenuItem>
          <MenuItem value="belarusian">Belarusian</MenuItem>
          <MenuItem value="belgian">Belgian</MenuItem>
          <MenuItem value="belizean">Belizean</MenuItem>
          <MenuItem value="beninese">Beninese</MenuItem>
          <MenuItem value="bhutanese">Bhutanese</MenuItem>
          <MenuItem value="bolivian">Bolivian</MenuItem>
          <MenuItem value="bosnian">Bosnian</MenuItem>
          <MenuItem value="brazilian">Brazilian</MenuItem>
          <MenuItem value="british">British</MenuItem>
          <MenuItem value="bruneian">Bruneian</MenuItem>
          <MenuItem value="bulgarian">Bulgarian</MenuItem>
          <MenuItem value="burkinabe">Burkinabe</MenuItem>
          <MenuItem value="burmese">Burmese</MenuItem>
          <MenuItem value="burundian">Burundian</MenuItem>
          <MenuItem value="cambodian">Cambodian</MenuItem>
          <MenuItem value="cameroonian">Cameroonian</MenuItem>
          <MenuItem value="canadian">Canadian</MenuItem>
          <MenuItem value="cape verdean">Cape Verdean</MenuItem>
          <MenuItem value="central african">Central African</MenuItem>
          <MenuItem value="chadian">Chadian</MenuItem>
          <MenuItem value="chilean">Chilean</MenuItem>
          <MenuItem value="chinese">Chinese</MenuItem>
          <MenuItem value="colombian">Colombian</MenuItem>
          <MenuItem value="comoran">Comoran</MenuItem>
          <MenuItem value="congolese">Congolese</MenuItem>
          <MenuItem value="costa rican">Costa Rican</MenuItem>
          <MenuItem value="croatian">Croatian</MenuItem>
          <MenuItem value="cuban">Cuban</MenuItem>
          <MenuItem value="cypriot">Cypriot</MenuItem>
          <MenuItem value="czech">Czech</MenuItem>
          <MenuItem value="danish">Danish</MenuItem>
          <MenuItem value="djibouti">Djibouti</MenuItem>
          <MenuItem value="dominican">Dominican</MenuItem>
          <MenuItem value="dutch">Dutch</MenuItem>
          <MenuItem value="east timorese">East Timorese</MenuItem>
          <MenuItem value="ecuadorean">Ecuadorean</MenuItem>
          <MenuItem value="egyptian">Egyptian</MenuItem>
          <MenuItem value="emirian">Emirian</MenuItem>
          <MenuItem value="equatorial guinean">Equatorial Guinean</MenuItem>
          <MenuItem value="eritrean">Eritrean</MenuItem>
          <MenuItem value="estonian">Estonian</MenuItem>
          <MenuItem value="ethiopian">Ethiopian</MenuItem>
          <MenuItem value="fijian">Fijian</MenuItem>
          <MenuItem value="filipino">Filipino</MenuItem>
          <MenuItem value="finnish">Finnish</MenuItem>
          <MenuItem value="french">French</MenuItem>
          <MenuItem value="gabonese">Gabonese</MenuItem>
          <MenuItem value="gambian">Gambian</MenuItem>
          <MenuItem value="georgian">Georgian</MenuItem>
          <MenuItem value="german">German</MenuItem>
          <MenuItem value="ghanaian">Ghanaian</MenuItem>
          <MenuItem value="greek">Greek</MenuItem>
          <MenuItem value="grenadian">Grenadian</MenuItem>
          <MenuItem value="guatemalan">Guatemalan</MenuItem>
          <MenuItem value="guinea-bissauan">Guinea-Bissauan</MenuItem>
          <MenuItem value="guinean">Guinean</MenuItem>
          <MenuItem value="guyanese">Guyanese</MenuItem>
          <MenuItem value="haitian">Haitian</MenuItem>
          <MenuItem value="herzegovinian">Herzegovinian</MenuItem>
          <MenuItem value="honduran">Honduran</MenuItem>
          <MenuItem value="hungarian">Hungarian</MenuItem>
          <MenuItem value="icelander">Icelander</MenuItem>
          <MenuItem value="indian">Indian</MenuItem>
          <MenuItem value="indonesian">Indonesian</MenuItem>
          <MenuItem value="iranian">Iranian</MenuItem>
          <MenuItem value="iraqi">Iraqi</MenuItem>
          <MenuItem value="irish">Irish</MenuItem>
          <MenuItem value="israeli">Israeli</MenuItem>
          <MenuItem value="italian">Italian</MenuItem>
          <MenuItem value="ivorian">Ivorian</MenuItem>
          <MenuItem value="jamaican">Jamaican</MenuItem>
          <MenuItem value="japanese">Japanese</MenuItem>
          <MenuItem value="jordanian">Jordanian</MenuItem>
          <MenuItem value="kazakhstani">Kazakhstani</MenuItem>
          <MenuItem value="kenyan">Kenyan</MenuItem>
          <MenuItem value="kittian and nevisian">Kittian and Nevisian</MenuItem>
          <MenuItem value="kuwaiti">Kuwaiti</MenuItem>
          <MenuItem value="kyrgyz">Kyrgyz</MenuItem>
          <MenuItem value="laotian">Laotian</MenuItem>
          <MenuItem value="latvian">Latvian</MenuItem>
          <MenuItem value="lebanese">Lebanese</MenuItem>
          <MenuItem value="liberian">Liberian</MenuItem>
          <MenuItem value="libyan">Libyan</MenuItem>
          <MenuItem value="liechtensteiner">Liechtensteiner</MenuItem>
          <MenuItem value="lithuanian">Lithuanian</MenuItem>
          <MenuItem value="luxembourger">Luxembourger</MenuItem>
          <MenuItem value="macedonian">Macedonian</MenuItem>
          <MenuItem value="malagasy">Malagasy</MenuItem>
          <MenuItem value="malawian">Malawian</MenuItem>
          <MenuItem value="malaysian">Malaysian</MenuItem>
          <MenuItem value="maldivan">Maldivan</MenuItem>
          <MenuItem value="malian">Malian</MenuItem>
          <MenuItem value="maltese">Maltese</MenuItem>
          <MenuItem value="marshallese">Marshallese</MenuItem>
          <MenuItem value="mauritanian">Mauritanian</MenuItem>
          <MenuItem value="mauritian">Mauritian</MenuItem>
          <MenuItem value="mexican">Mexican</MenuItem>
          <MenuItem value="micronesian">Micronesian</MenuItem>
          <MenuItem value="moldovan">Moldovan</MenuItem>
          <MenuItem value="monacan">Monacan</MenuItem>
          <MenuItem value="mongolian">Mongolian</MenuItem>
          <MenuItem value="moroccan">Moroccan</MenuItem>
          <MenuItem value="mosotho">Mosotho</MenuItem>
          <MenuItem value="motswana">Motswana</MenuItem>
          <MenuItem value="mozambican">Mozambican</MenuItem>
          <MenuItem value="namibian">Namibian</MenuItem>
          <MenuItem value="nauruan">Nauruan</MenuItem>
          <MenuItem value="nepalese">Nepalese</MenuItem>
          <MenuItem value="new zealander">New Zealander</MenuItem>
          <MenuItem value="ni-vanuatu">Ni-Vanuatu</MenuItem>
          <MenuItem value="nicaraguan">Nicaraguan</MenuItem>
          <MenuItem value="nigerien">Nigerien</MenuItem>
          <MenuItem value="north korean">North Korean</MenuItem>
          <MenuItem value="northern irish">Northern Irish</MenuItem>
          <MenuItem value="norwegian">Norwegian</MenuItem>
          <MenuItem value="omani">Omani</MenuItem>
          <MenuItem value="pakistani">Pakistani</MenuItem>
          <MenuItem value="palauan">Palauan</MenuItem>
          <MenuItem value="panamanian">Panamanian</MenuItem>
          <MenuItem value="papua new guinean">Papua New Guinean</MenuItem>
          <MenuItem value="paraguayan">Paraguayan</MenuItem>
          <MenuItem value="peruvian">Peruvian</MenuItem>
          <MenuItem value="polish">Polish</MenuItem>
          <MenuItem value="portuguese">Portuguese</MenuItem>
          <MenuItem value="qatari">Qatari</MenuItem>
          <MenuItem value="romanian">Romanian</MenuItem>
          <MenuItem value="russian">Russian</MenuItem>
          <MenuItem value="rwandan">Rwandan</MenuItem>
          <MenuItem value="saint lucian">Saint Lucian</MenuItem>
          <MenuItem value="salvadoran">Salvadoran</MenuItem>
          <MenuItem value="samoan">Samoan</MenuItem>
          <MenuItem value="san marinese">San Marinese</MenuItem>
          <MenuItem value="sao tomean">Sao Tomean</MenuItem>
          <MenuItem value="saudi">Saudi</MenuItem>
          <MenuItem value="scottish">Scottish</MenuItem>
          <MenuItem value="senegalese">Senegalese</MenuItem>
          <MenuItem value="serbian">Serbian</MenuItem>
          <MenuItem value="seychellois">Seychellois</MenuItem>
          <MenuItem value="sierra leonean">Sierra Leonean</MenuItem>
          <MenuItem value="singaporean">Singaporean</MenuItem>
          <MenuItem value="slovakian">Slovakian</MenuItem>
          <MenuItem value="slovenian">Slovenian</MenuItem>
          <MenuItem value="solomon islander">Solomon Islander</MenuItem>
          <MenuItem value="somali">Somali</MenuItem>
          <MenuItem value="south african">South African</MenuItem>
          <MenuItem value="south korean">South Korean</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
          <MenuItem value="sri lankan">Sri Lankan</MenuItem>
          <MenuItem value="sudanese">Sudanese</MenuItem>
          <MenuItem value="surinamer">Surinamer</MenuItem>
          <MenuItem value="swazi">Swazi</MenuItem>
          <MenuItem value="swedish">Swedish</MenuItem>
          <MenuItem value="swiss">Swiss</MenuItem>
          <MenuItem value="syrian">Syrian</MenuItem>
          <MenuItem value="taiwanese">Taiwanese</MenuItem>
          <MenuItem value="tajik">Tajik</MenuItem>
          <MenuItem value="tanzanian">Tanzanian</MenuItem>
          <MenuItem value="thai">Thai</MenuItem>
          <MenuItem value="togolese">Togolese</MenuItem>
          <MenuItem value="tongan">Tongan</MenuItem>
          <MenuItem value="trinidadian or tobagonian">Trinidadian or Tobagonian</MenuItem>
          <MenuItem value="tunisian">Tunisian</MenuItem>
          <MenuItem value="turkish">Turkish</MenuItem>
          <MenuItem value="tuvaluan">Tuvaluan</MenuItem>
          <MenuItem value="ugandan">Ugandan</MenuItem>
          <MenuItem value="ukrainian">Ukrainian</MenuItem>
          <MenuItem value="uruguayan">Uruguayan</MenuItem>
          <MenuItem value="uzbekistani">Uzbekistani</MenuItem>
          <MenuItem value="venezuelan">Venezuelan</MenuItem>
          <MenuItem value="vietnamese">Vietnamese</MenuItem>
          <MenuItem value="welsh">Welsh</MenuItem>
          <MenuItem value="yemenite">Yemenite</MenuItem>
          <MenuItem value="zambian">Zambian</MenuItem>
          <MenuItem value="zimbabwean">Zimbabwean</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
      <div className="flex gap-2 flex-col w-full">
        <label htmlFor="Twitter">Twitter</label>
        <input
          type="url"
          name="Twitter"
          id="Twitter"
          ref={twitterRef}
          className="bg-[#011335] border  px-3  border-white rounded h-10 focus:outline-blue-500 "
        />
      </div>
      <FormControlLabel control={<Checkbox defaultChecked /> } label="Receive Rewards" sx={{position: 'relative',right: '30%',}}/>
      <div className="flex gap-4 justify-center">
        <button
          type="button"
          onClick={onCloseForm}
          className="font-Roboto border border-[#B8C0CC] rounded py-[8px] px-[24px]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="font-Roboto bg-[#6E028F] rounded py-[8px] px-[24px]"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileEditForm;

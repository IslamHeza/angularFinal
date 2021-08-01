import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoriesComponent } from './Components/catagory/catagories/catagories.component';
import { SelectedCatComponent } from './Components/catagory/selected-cat/selected-cat.component';
import { HomeFreelancerDashboardComponent } from './Components/freelancerDashboard/home-freelancer-dashboard/home-freelancer-dashboard.component';
import { EditprofileComponent } from './Components/editprofile/editprofile.component';
import { ProfileComponent } from './Components/profile/profile/profile.component';
import { SettingComponent } from './Components/setting/setting.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { JobsComponent } from './Components/jobs/jobs.component';
import { HomeComponent } from './Components/Home/home/home.component';


const routes: Routes = [
  {path:"Catagories",component:CatagoriesComponent },
  {path: "Catagories/:name",component: SelectedCatComponent },
  {path:"dashboard",component:HomeFreelancerDashboardComponent},
  {path:"profile",component:ProfileComponent},
  {path:"setting",component:SettingComponent},
  {path:"editProfile",component:EditprofileComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component: AboutComponent},
  {path:"jobs",component:JobsComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home" , pathMatch:"full"}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

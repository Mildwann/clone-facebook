import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
  
})
export class Tab1Page {
  public appPages = [
    { title: 'เพื่อน', url: '/profile', Image: '/assets/friend.png' },
    { title: 'ความทรงจำ', url: '/friend', Image: '/assets/memories.png' },
    { title: 'ที่บันทึกไว้', url: '/folder/saved', Image: '/assets/saved.png' },
    { title: 'กลุ่ม', url: '/folder/archived', Image: '/assets/groups.png' },
    { title: 'วิดีโอ', url: '/folder/trash', Image: '/assets/videocolor.png' },
    { title: 'Marketplace', url: '/folder/spam', Image: '/assets/social-media.png' },
  ];
  public labels = [ 
    { title: 'VALORANT Thailand Market【ซื้อขาย-แลกเปลี่ยน】', Image: '/assets/valomarket.jpg' },
    { title: '47 Dota 2 Community', Image: '/assets/47.jpg' },
    { title: 'Jobs for Thai Programmers', Image: '/assets/job.jpg' },
    { title: 'Netflix/รีวิวหนัง/ซีรีส์', Image: '/assets/netflix.jpg' },
    { title: 'VALORANT Thailand Community', Image: '/assets/valocommu.jpg' },
    { title: 'Intern Jobs หางาน นักศึกษาฝึกงาน', Image: '/assets/intern.jpg' },
  ];
  isSmallScreen = window.innerWidth <= 480; // สำหรับ Mobile
  isTabletScreen = window.innerWidth > 480 && window.innerWidth <= 1024; // สำหรับ Tablet
  isLargeScreen = window.innerWidth > 1024; // สำหรับ Desktop

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth <= 480;
    this.isTabletScreen = window.innerWidth > 480 && window.innerWidth <= 1024;
    this.isLargeScreen = window.innerWidth > 1024;
  }
  sponsoredItems = [
    { image: "/assets/adobe.png", title: "นักเรียนรับส่วนลด 65% " },
    { image: "/assets/noc.png", title: "สินค้าจำนวนจำกัด" }
  ];

  onlineFriends = [
    { image: "/assets/gbang.jpg", name: "รูปหล่อ แต่ธรรมดา" },
    { image: "/assets/employee.jpg", name: "taloy swift" },
    { image: "/assets/bang2.jpg", name: "sompana rumor" },
    { image: "/assets/arai.jpg", name: "araina wahag" },
    { image: "/assets/rose.jpg", name: "rosaroy rose" },
    { image: "/assets/mirror.jpg", name: "american girls" },
    { image: "/assets/cutie.jpg", name: "เจ้าหญิงออโรร่า" },

    
  ];

  userGroups = [
    { image: "/assets/chatgroup.jpg", name: "valo 24 hours" },
    { image: "/assets/cartoon.jpg", name: "cartoon club" }
  ];
  
}

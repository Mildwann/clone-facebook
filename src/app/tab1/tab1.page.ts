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
  isSmallScreen: boolean = window.innerWidth <= 480; // ตรวจสอบหน้าจอเริ่มต้น

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth <= 480; // อัปเดตสถานะเมื่อหน้าจอเปลี่ยนขนาด
  }

  constructor() {}

  
}

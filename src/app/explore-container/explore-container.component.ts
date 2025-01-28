import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: false,
})
export class ExploreContainerComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  tasks: any = []
  posts: any = [];
  
  constructor(){
    this.loadTasks();
    this.Postfeed();
  
  }
  ngOnInit() {

  }
  loadTasks() {
    this.tasks = [
      { image: '/assets/snow.gif', title: 'Redesign home screen',  },
      { image: '/assets/siger.gif', title: 'Fix login issue' },
      { image: '/assets/bas.gif', title: 'Update user profile UI' },
      { image: '/assets/police.gif', title: 'Update user profile UI' },
      { image: '/assets/popcorn.gif', title: 'Update user profile UI' },
      { image: '/assets/dance.gif', title: 'Redesign home screen',  },
      { image: '/assets/road.gif', title: 'Redesign home screen',  },
      { image: '/assets/snow.gif', title: 'Redesign home screen',  },
      { image: '/assets/siger.gif', title: 'Fix login issue' },
      { image: '/assets/bas.gif', title: 'Update user profile UI' },
      { image: '/assets/police.gif', title: 'Update user profile UI' },
      { image: '/assets/popcorn.gif', title: 'Update user profile UI' },
      { image: '/assets/dance.gif', title: 'Redesign home screen',  },
      { image: '/assets/road.gif', title: 'Redesign home screen',  },
      
    ];
  }
  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: -200, behavior: 'smooth' });
  }

  // ฟังก์ชันเลื่อนไปทางขวา
  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }
  
  Postfeed(){
    this.posts = [
      { userName: "Fabrizio Romano", userAvatar: "/assets/coach.jpg",timePosted: "2 hours ago",content: "🚨🔵🔴 Marca: “Rashford still WANTS Barça, he take a PAY CUT but there no financial green light yet Barcelona can only afford Marcus if they sell at least one player from now on.", image: "/assets/football.jpg",likes: 10,comments: 2,shares: 1, },
      { userName: "ขายรหัสวาโร", userAvatar: "/assets/korean.jpg",timePosted: "2 hours ago",content: "👇ทักเพจไปได้เลยครับ👇", image: "/assets/valo.jpg",likes: 10,comments: 2,shares: 1, },
      { userName: "คาราโอเกะชั้นใต้ดิน", userAvatar: "/assets/bang.jpg",timePosted: "2 hours ago",content: "", image: "/assets/meme.jpg",likes: 10,comments: 2,shares: 1, },
      { userName: "ขอบสนาม", userAvatar: "/assets/player.jpg",timePosted: "2 hours ago",content: "สมมุติว่าทีมของคุณกำลังหนีตกชั้น...และนัดนี้เป็นนัดสุดท้ายของฤดูกาลทีมต้องการ 3 คะแนน เพื่ออยู่รอดเกมดำเนินมาจนถึง นาทีที่ 90+3 สกอร์ยังเสมอกัน 0-0ทีมของคุณได้จุดโทษก่อนหมดเวลาพอดีหน้าที่สำคัญขนาดนี้ ให้ใครเป็นคนรับหน้าที่นี้ดี#ขอบสนามถามเล่นๆ", image: "/assets/who.jpg",likes: 10,comments: 2,shares: 1, },
      { userName: "วัชระ แลดไธสง", userAvatar: "/assets/indian.jpg",timePosted: "2 hours ago",content: "เต็ม 10 ให้กี่คะแนนครับ", image: "/assets/mama.jpg" ,likes: 10,comments: 2,shares: 1,},
    ];
  }
  likePost(post: any) {
    post.likes += 1; // เพิ่มจำนวนไลก์
  }
  
  commentPost(post: any) {
    // ตัวอย่างโค้ดแสดงผลการคอมเม้น
    alert(`Commenting on: ${post.content}`);
  }
  
  sharePost(post: any) {
    // ตัวอย่างโค้ดแสดงผลการแชร์
    alert(`Sharing post: ${post.content}`);
  }
  
}

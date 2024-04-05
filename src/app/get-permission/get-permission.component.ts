import { Component, OnInit, inject } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-permission',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './get-permission.component.html',
  styleUrl: './get-permission.component.scss'
})
export class GetPermissionComponent implements OnInit {
  permissionService = inject(PermissionService);

  ngOnInit(): void {
      this.permissionService.getAccess();  
  }
}

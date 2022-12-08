<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * php artisan db:seed --class=PermissionSeeder
     * @return void
     */
    public function run()
    {
        //
        $permission = Permission::create(['name' => 'delete-restaurant']);
        $permission = Permission::create(['name' => 'assign-admin']);
        $permission = Permission::create(['name' => 'assign-waiter']);
        $permission = Permission::create(['name' => 'assign-cook']);
        $permission = Permission::create(['name' => 'assign-supplier']);
        $permission = Permission::create(['name' => 'assign-photographer']);
        $permission = Permission::create(['name' => 'assign-tester']);
        $permission = Permission::create(['name' => 'assign-journalist']);
        $permission = Permission::create(['name' => 'assign-vip']);

    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *command to use :
     * php artisan db:seed --class=RoleSeeder
     * @return void
     */
    public function run()
    {
        //
        $role=Role::create(['name'=>'Admin']);
        $role=Role::create(['name'=>'Ownder']);
        $role=Role::create(['name'=>'Bhojan-owner']);
        $role=Role::create(['name'=>'Bhojan-Admin']);
        $role=Role::create(['name'=>'Bhojan-editor']);
    }
}

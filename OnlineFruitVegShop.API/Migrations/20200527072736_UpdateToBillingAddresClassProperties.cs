using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineFruitVegShop.API.Migrations
{
    public partial class UpdateToBillingAddresClassProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BillingAddresses_Orders_OrderId",
                table: "BillingAddresses");

            migrationBuilder.DropIndex(
                name: "IX_BillingAddresses_OrderId",
                table: "BillingAddresses");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "BillingAddresses");

            migrationBuilder.AddColumn<int>(
                name: "BillingAddressId",
                table: "Orders",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BillingAddressId",
                table: "Orders");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "BillingAddresses",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_BillingAddresses_OrderId",
                table: "BillingAddresses",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_BillingAddresses_Orders_OrderId",
                table: "BillingAddresses",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "OrderId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

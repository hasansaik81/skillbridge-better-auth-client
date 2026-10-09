import { allBookings } from "@/actions/admin.action";
import { redirect } from "next/navigation";
import { ErrorDisplay } from "@/components/GlobalComponent/ErrorDisplay";
import { DashboardAdminBookingsClient } from "@/components/Dashboard/admin/DashboardAdminBookingsClient";

export default async function AdminBookingsPage() {
  const { data: bookings, error } = await allBookings();

  if (error || !bookings) {
    return <ErrorDisplay error={error} data={bookings} />;
  }

  return <DashboardAdminBookingsClient initialBookings={bookings} />;
}

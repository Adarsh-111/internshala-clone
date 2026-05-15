export function applyFilters(internships, filters) {
  return internships.filter((item) => {
    const {
      profile,
      location,
      duration,
      stipend,
    } = filters;

    // PROFILE FILTER
    if (
      profile &&
      !item.profile_name
        ?.toLowerCase()
        .includes(profile.toLowerCase())
    ) {
      return false;
    }

    // LOCATION FILTER
    if (
      location &&
      !item.location_names?.some((loc) =>
        loc
          .toLowerCase()
          .includes(location.toLowerCase())
      )
    ) {
      return false;
    }

    // DURATION FILTER
    if (duration) {
      const durationText = item.duration || "";

      const months = parseInt(
        durationText.match(/\d+/)?.[0] || 0
      );

      if (
        duration === "1-3" &&
        !(months >= 1 && months <= 3)
      ) {
        return false;
      }

      if (
        duration === "3-6" &&
        !(months > 3 && months <= 6)
      ) {
        return false;
      }

      if (
        duration === "6+" &&
        !(months > 6)
      ) {
        return false;
      }
    }

    // STIPEND FILTER
    if (stipend) {
      const salary =
        parseInt(
          item.stipend?.salaries?.[0]?.salary
            ?.replace(/,/g, "") || 0
        );

      if (stipend === "0" && salary !== 0) {
        return false;
      }

      if (
        stipend === "1-5000" &&
        !(salary >= 1 && salary <= 5000)
      ) {
        return false;
      }

      if (
        stipend === "5000-10000" &&
        !(salary > 5000 && salary <= 10000)
      ) {
        return false;
      }

      if (
        stipend === "10000+" &&
        !(salary > 10000)
      ) {
        return false;
      }
    }

    return true;
  });
}
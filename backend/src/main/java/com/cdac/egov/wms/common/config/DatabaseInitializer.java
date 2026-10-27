package com.cdac.egov.wms.common.config;

import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import com.cdac.egov.wms.work.subwork.building.entity.DropdownOption;
import com.cdac.egov.wms.work.subwork.building.repository.BuildingDropdownOptionRepository;
import com.cdac.egov.wms.work.subwork.unit.entity.Unit;
import com.cdac.egov.wms.work.subwork.unit.repository.UnitRepository;

@Configuration
public class DatabaseInitializer {

    @Bean
    ApplicationRunner initializeDatabase(
            JdbcTemplate jdbc,
            BuildingDropdownOptionRepository dropdownRepository,
            UnitRepository unitRepository) {

        return args -> {
            jdbc.execute(
                "CREATE SEQUENCE IF NOT EXISTS work_id_seq START WITH 1");
            jdbc.execute(
                "CREATE SEQUENCE IF NOT EXISTS subwork_id_seq START WITH 1");

            addOption(dropdownRepository, "MAINTENANCE_TYPE",
                    "CR (Current Repair)");
            addOption(dropdownRepository, "MAINTENANCE_TYPE",
                    "SLR (Special Repair)");
            addOption(dropdownRepository, "MAINTENANCE_TYPE",
                    "SDR (Specified Repair)");

            addOption(dropdownRepository, "BUILDING_ACTIVITY",
                    "New Construction");
            addOption(dropdownRepository, "BUILDING_ACTIVITY",
                    "Other Activities From PMIS");

            addUnits(unitRepository);
        };
    }

    private void addUnits(UnitRepository repository) {
        String[][] units = {
            {"sqm", "Square Metre"},
            {"kg", "Kilo Gram"},
            {"each", "each"},
            {"quintal", "Quintal"},
            {"cum", "Cubic Metre"},
            {"NA", "Not Applicable"},
            {"BAG", "BAGS"},
            {"BKL", "BUCKLES"},
            {"BOU", "BOU"},
            {"BOX", "BOX"},
            {"BTL", "BOTTLES"},
            {"BUN", "BUNCHES"},
            {"CCM", "CUBIC CENTIMETER"},
            {"CIN", "CUBIC INCHES"},
            {"CLT", "CENTILITRE"},
            {"CMT", "CENTIMETRE"},
            {"CUM", "CUBIC METRE"},
            {"DRM", "DRUM"},
            {"GMS", "GRAMS"},
            {"GRS", "GROSS"},
            {"GYD", "GROSS YARDS"},
            {"KGS", "KILOGRAMS"},
            {"KLR", "KILOLITRE"},
            {"KME", "KILOMETRE"},
            {"LTR", "LITRES"},
            {"MLT", "MILLILITRE"},
            {"MTR", "METRES"},
            {"NOS", "NUMBERS"},
            {"OTH", "OTHERS"},
            {"PAC", "PACKS"},
            {"PRS", "PAIRS"},
            {"QTL", "QUINTAL"},
            {"SET", "SETS"},
            {"SQF", "SQUARE FEET"},
            {"SQM", "SQUARE METRES"},
            {"SQY", "SQUARE YARDS"},
            {"TBS", "TABLETS"},
            {"TGM", "TEN GROSS"},
            {"THD", "THOUSANDS"},
            {"TON", "TONNES"},
            {"TUB", "TUBES"},
            {"UGS", "US GALLONS"},
            {"UNT", "UNITS"},
            {"YDS", "YARDS"}
        };

        for (String[] unit : units) {
            String shortName = unit[0];
            String description = unit[1];
            if (!repository.existsByShortName(shortName)) {
                repository.save(new Unit(shortName, description));
            }
        }
    }

    private void addOption(
            BuildingDropdownOptionRepository repository,
            String category,
            String label) {

        if (!repository.existsByCategoryAndLabel(category, label)) {
            repository.save(new DropdownOption(category, label));
        }
    }
}
